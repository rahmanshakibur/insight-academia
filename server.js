const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const dir = __dirname;

// In-memory active single-device session registry
// Format: { [userEmail]: { token, deviceId, deviceName, loginTime, lastPing } }
const activeSessions = {};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const cleanUrl = parsedUrl.pathname;

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    return res.end();
  }

  // --- SINGLE DEVICE SESSION API ---
  if (cleanUrl === '/api/session/register' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');
        const userKey = (data.userId || '').trim().toLowerCase();
        if (userKey) {
          activeSessions[userKey] = {
            token: data.token,
            deviceId: data.deviceId,
            deviceName: data.deviceName || 'নতুন ডিভাইস',
            loginTime: Date.now(),
            lastPing: Date.now()
          };
        }
        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({ success: true, activeToken: data.token }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
    return;
  }

  if (cleanUrl === '/api/session/check' && req.method === 'GET') {
    const userKey = (parsedUrl.query.userId || '').trim().toLowerCase();
    const token = parsedUrl.query.token;
    const current = activeSessions[userKey];

    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    });

    if (!current) {
      // If not yet registered on server, register automatically
      if (userKey && token) {
        activeSessions[userKey] = {
          token: token,
          deviceId: parsedUrl.query.deviceId || 'dev_init',
          deviceName: parsedUrl.query.deviceName || 'বর্তমান ডিভাইস',
          loginTime: Date.now(),
          lastPing: Date.now()
        };
      }
      return res.end(JSON.stringify({ active: true, registered: false }));
    }

    const isActive = (current.token === token);
    if (isActive) {
      current.lastPing = Date.now();
    }
    return res.end(JSON.stringify({
      active: isActive,
      registered: true,
      currentDevice: current.deviceName,
      loginTime: current.loginTime
    }));
  }

  if (cleanUrl === '/api/session/logout' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');
        const userKey = (data.userId || '').trim().toLowerCase();
        if (userKey && activeSessions[userKey] && activeSessions[userKey].token === data.token) {
          delete activeSessions[userKey];
        }
        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({ success: true }));
      } catch (e) {
        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        res.end(JSON.stringify({ success: false }));
      }
    });
    return;
  }

  // --- STATIC FILE SERVING ---
  let filePath = path.join(dir, cleanUrl === '/' ? 'insight_academia_multipage.html' : cleanUrl);

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(dir, 'insight_academia_multipage.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ttf': 'font/ttf',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2'
  };

  const contentType = mimeTypes[ext] || 'application/octet-stream';

  res.writeHead(200, {
    'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache'
  });

  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Insight Academia server running at: http://localhost:${PORT}`);
});
