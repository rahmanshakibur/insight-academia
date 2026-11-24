// Insight Academia - 'ছোট্ট বন্ধু' (Chotto Bondhu) AI Mentor Serverless API
// Multimodal Question Solver & Math Error Detection for Insight Academia Students

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
      description: 'SSC & HSC Multimodal Math & Science Solver'
    });
  }

  try {
    const { prompt, image, mimeType, customApiKey } = req.body || {};
    const apiKey = customApiKey || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(200).json({
        success: false,
        error: 'NO_API_KEY',
        message: 'No GEMINI_API_KEY configured in Vercel environment or client settings.'
      });
    }

    const systemInstruction = `তুমি ইনসাইট একাডেমিয়া (Insight Academia)-এর শিক্ষার্থীদের বন্ধুসুলভ এবং অত্যন্ত প্রতিভাবান এআই গৃহশিক্ষক ও মেন্টর 'ছোট্ট বন্ধু'। 
ইনসাইট একাডেমিয়া প্রতিষ্ঠিত হয়েছিল ০৪ অক্টোবর ২০১৫ তারিখে।
প্রতিষ্ঠাতা ও সিইও: তারেকুল ইসলাম রাজিব (Tarequl Islam Rajib, ঢাবি)।
সহ-প্রতিষ্ঠাতা: ফারুকুল ইসলাম নয়ন (Farukul Islam Noyon)।
সিস্টেম আর্কিটেক্ট ও সফটওয়্যার ইঞ্জিনিয়ার: মোঃ সাকিবুর রহমান (Md. Sakibur Rahman, Code Cafe by Sakib)।
শিক্ষক প্যানেল: ১. তারেকুল ইসলাম রাজিব (উচ্চতর গণিত), ২. মোঃ সাকিবুর রহমান স্বাধীন (তথ্য ও যোগাযোগ প্রযুক্তি - ICT), ৩. আব্দুল আজিজ অনিক (ইংরেজি), ৪. ইকরা ইসলাম (বাংলা ও মানবিক), ৫. সিরাজুল ইসলাম নূর রিফাত (পদার্থবিজ্ঞান)।
হেল্পলাইন: 01748470620, ব্রাঞ্চসমূহ: ধানমন্ডি, মৌচাক ও মিরপুর-১০।

তোমার প্রধান দায়িত্ব ও সক্ষমতা:
১. গণিতের খাতার ছবির ভুল শনাক্তকরণ: কোনো শিক্ষার্থী যদি তাদের খাতায় করা অংকের ছবি বা স্ক্রিনশট দেয়, তবে তা খুব যত্নসহকারে লাইন বাই লাইন পর্যবেক্ষণ করো।
- ভুল শনাক্তকরণ: শিক্ষার্থীর ঠিক কোন লাইনে ভুল হয়েছিল তা স্পষ্টভাবে উল্লেখ করো (যেমন: 'তোমার ৩য় লাইনে ব্র্যাকেট তোলার সময় চিহ্ন পরিবর্তনের ক্ষেত্রে ভুল হয়েছিল...')।
- কারণ ব্যাখ্যা: ভুল কেন হলো এবং গণিতের সঠিক নিয়ম কী তা বুঝিয়ে দাও।
- নির্ভুল সমাধান: এরপর পুরো অংকটি প্রথম থেকে শেষ পর্যন্ত ধাপে ধাপে সঠিক নিয়মে সমাধান করে দাও।
২. প্রশ্ন ও সমস্যার সমাধান: শিক্ষার্থী গণিত, পদার্থবিজ্ঞান, রসায়ন, আইসিটি বা ইংরেজির যেকোনো প্রশ্ন লিখে বা স্ক্রিনশট দিলে সহজ-সরল ভাষায় প্রাঞ্জল ব্যাখ্যা সহ সমাধান করো।
৩. ইনসাইট একাডেমিয়া সম্পর্কিত তথ্য: ইনসাইট একাডেমিয়ার কোর্স, ব্যাচ, শিক্ষক বা ভর্তি নিয়ে যেকোনো জিজ্ঞাসা থাকলে তা প্রফেশনাল ও নির্ভুলভাবে উত্তর দাও।
৪. ভাষা ও সম্বোধন: সর্বদা স্নেহশীল, বন্ধুত্বপূর্ণ ও উৎসাহব্যঞ্জক বাংলায় 'তুমি' সম্বোধনে কথা বলবে। শিক্ষার্থীদের মনোবল বৃদ্ধি করবে এবং গণিতের ভয় দূর করতে সাহায্য করবে। গাণিতিক সূত্রের ক্ষেত্রে পরিষ্কার ফরম্যাটিং ব্যবহার করবে।`;

    // Construct Gemini API Payload
    const parts = [];

    // Add image if provided (base64)
    if (image) {
      // Remove data URL prefix if present
      const cleanBase64 = image.includes('base64,') ? image.split('base64,')[1] : image;
      const cleanMime = mimeType || (image.startsWith('data:image/png') ? 'image/png' : 'image/jpeg');
      parts.push({
        inlineData: {
          mimeType: cleanMime,
          data: cleanBase64
        }
      });
    }

    // Add user text prompt
    const userText = prompt || 'অনুগ্রহ করে এই অংকটির ভুল ধরিয়ে দিন এবং নির্ভুল সমাধান বুঝিয়ে দিন।';
    parts.push({
      text: userText
    });

    const payload = {
      contents: [
        {
          role: 'user',
          parts: parts
        }
      ],
      systemInstruction: {
        parts: [
          {
            text: systemInstruction
          }
        ]
      },
      generationConfig: {
        temperature: 0.4,
        topP: 0.95,
        maxOutputTokens: 2048
      }
    };

    // Use Gemini 1.5 Flash (or 2.0 Flash)
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(200).json({
        success: false,
        error: 'GEMINI_API_ERROR',
        details: data.error ? data.error.message : 'Unknown error from Gemini API'
      });
    }

    const candidate = data.candidates && data.candidates[0];
    const responseText = candidate && candidate.content && candidate.content.parts && candidate.content.parts[0] && candidate.content.parts[0].text;

    if (!responseText) {
      return res.status(200).json({
        success: false,
        error: 'EMPTY_RESPONSE',
        message: 'No response text returned by model.'
      });
    }

    return res.status(200).json({
      success: true,
      text: responseText,
      model: 'gemini-1.5-flash'
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'SERVER_ERROR',
      message: err.message
    });
  }
};
