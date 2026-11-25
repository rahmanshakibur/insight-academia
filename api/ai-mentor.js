// Insight Academia - 'ছোট্ট বন্ধু' (Chotto Bondhu) AI Mentor Serverless API
// Universal Multimodal AI Solver for Insight Academia Students

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(200).json({
      status: 'active',
      name: 'Chotto Bondhu AI Mentor API',
      organization: 'Insight Academia',
      description: 'SSC & HSC Multimodal Universal AI Solver'
    });
  }

  try {
    const { prompt, image, mimeType, customApiKey } = req.body || {};
    const apiKey = customApiKey || process.env.GEMINI_API_KEY;

    const systemInstruction = `তুমি ইনসাইট একাডেমিয়া (Insight Academia)-এর বন্ধুসুলভ, স্নেহময় ও অত্যন্ত প্রতিভাবান এআই গৃহশিক্ষক ও মেন্টর 'ছোট্ট বন্ধু'।
ইনসাইট একাডেমিয়া প্রতিষ্ঠিত হয়েছিল ০৪ অক্টোবর ২০১৫ তারিখে।
প্রতিষ্ঠাতা ও সিইও: তারেকুল ইসলাম রাজিব (Tarequl Islam Rajib, ঢাবি)।
সহ-প্রতিষ্ঠাতা: ফারুকুল ইসলাম নয়ন (Farukul Islam Noyon)।
সিস্টেম আর্কিটেক্ট ও সফটওয়্যার ইঞ্জিনিয়ার: মোঃ সাকিবুর রহমান (Md. Sakibur Rahman, Code Cafe by Sakib)।
শিক্ষক প্যানেল: ১. তারেকুল ইসলাম রাজিব (উচ্চতর গণিত), ২. মোঃ সাকিবুর রহমান স্বাধীন (তথ্য ও যোগাযোগ প্রযুক্তি - ICT), ৩. আব্দুল আজিজ অনিক (ইংরেজি), ৪. ইকরা ইসলাম (বাংলা ও মানবিক), ৫. সিরাজুল ইসলাম নূর রিফাত (পদার্থবিজ্ঞান)।
হেল্পলাইন: 01748470620, ব্রাঞ্চসমূহ: ধানমন্ডি, মৌচাক ও মিরপুর-১০।

তোমার প্রধান দায়িত্ব:
১. শিক্ষার্থী যেকোনো প্রশ্ন (ICT, বিজ্ঞান, গণিত, পদার্থবিজ্ঞান, প্রোগ্রামিং, প্রযুক্তি, বা যেকোনো শিক্ষণীয় বিষয়) করলে খুব সহজ-সরল, প্রাঞ্জল ও আকর্ষণীয় বাংলায় বুঝিয়ে বলো।
২. যদি শিক্ষার্থী কোনো অংক বা খাতার ছবি দেয়, তবে কোথায় ভুল হয়েছে তা ধরিয়ে দিয়ে সঠিক সমাধান বুঝিয়ে দাও।
৩. যদি প্রশ্ন কম্পিউটার আর্কিটেকচার (যেমন: Von Neumann Architecture), এপিআই (API), নেটওয়ার্কিং, এইচটিএমএল বা প্রোগ্রামিং সংক্রান্ত হয়, তবে বাস্তব জীবনের উদাহরণ দিয়ে গুছিয়ে বুঝিয়ে দাও।
৪. সর্বদা বন্ধুসুলভ ভাষায় 'তুমি' সম্বোধন করবে এবং শিক্ষার্থীদের পড়াশোনায় উৎসাহিত করবে।`;

    let responseText = null;

    // 1. Try Gemini API if key is available
    if (apiKey) {
      try {
        const parts = [];
        if (image) {
          const cleanBase64 = image.includes('base64,') ? image.split('base64,')[1] : image;
          const cleanMime = mimeType || (image.startsWith('data:image/png') ? 'image/png' : 'image/jpeg');
          parts.push({
            inlineData: {
              mimeType: cleanMime,
              data: cleanBase64
            }
          });
        }
        parts.push({
          text: prompt || 'হ্যালো ছোট্ট বন্ধু!'
        });

        const geminiPayload = {
          contents: [{ role: 'user', parts: parts }],
          systemInstruction: { parts: [{ text: systemInstruction }] },
          generationConfig: { temperature: 0.5, topP: 0.95, maxOutputTokens: 2048 }
        };

        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
        const gRes = await fetch(geminiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(geminiPayload)
        });

        if (gRes.ok) {
          const gData = await gRes.json();
          const cand = gData.candidates && gData.candidates[0];
          const gText = cand && cand.content && cand.content.parts && cand.content.parts[0] && cand.content.parts[0].text;
          if (gText && gText.trim().length > 0) {
            responseText = gText.trim();
          }
        }
      } catch (geminiErr) {
        console.warn('Gemini API call failed, falling back to open AI engine:', geminiErr.message);
      }
    }

    // 2. Open Intelligent AI Engine Fallback (Pollinations AI)
    if (!responseText) {
      try {
        const fullPrompt = `${systemInstruction}\n\nশিক্ষার্থীর প্রশ্ন: ${prompt || 'নমস্কার'}\n\nউত্তর (সহজ বাংলায় বুঝিয়ে দাও):`;
        const polUrl = `https://text.pollinations.ai/${encodeURIComponent(fullPrompt)}`;
        const polRes = await fetch(polUrl, { method: 'GET' });
        if (polRes.ok) {
          const polText = await polRes.text();
          if (polText && polText.trim().length > 10) {
            responseText = polText.trim();
          }
        }
      } catch (polErr) {
        console.warn('Pollinations AI fallback failed:', polErr.message);
      }
    }

    // 3. Return successful response
    if (responseText) {
      return res.status(200).json({
        success: true,
        text: responseText,
        model: apiKey ? 'gemini-1.5-flash' : 'open-ai-engine'
      });
    }

    return res.status(200).json({
      success: false,
      error: 'NO_RESPONSE',
      message: 'Could not generate answer from AI services.'
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'SERVER_ERROR',
      message: err.message
    });
  }
};
