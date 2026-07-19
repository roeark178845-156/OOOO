import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // robots.txt for search engines
  app.get("/robots.txt", (req, res) => {
    const host = req.get("host") || "ais-pre-4f7vhehthsd7wpp3pxgjfr-250294217184.asia-east1.run.app";
    const protocol = req.secure || req.headers["x-forwarded-proto"] === "https" ? "https" : "http";
    res.header("Content-Type", "text/plain");
    res.send(`User-agent: *
Allow: /

Sitemap: ${protocol}://${host}/sitemap.xml`);
  });

  // sitemap.xml for Google indexing
  app.get("/sitemap.xml", (req, res) => {
    const host = req.get("host") || "ais-pre-4f7vhehthsd7wpp3pxgjfr-250294217184.asia-east1.run.app";
    const protocol = req.secure || req.headers["x-forwarded-proto"] === "https" ? "https" : "http";
    const baseUrl = `${protocol}://${host}`;
    res.header("Content-Type", "application/xml");
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>2026-07-19</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/#about</loc>
    <lastmod>2026-07-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/#events</loc>
    <lastmod>2026-07-19</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/#gallery</loc>
    <lastmod>2026-07-19</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/#services</loc>
    <lastmod>2026-07-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/#contact</loc>
    <lastmod>2026-07-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`);
  });

  // manifest.json for PWA / installation metadata
  app.get("/manifest.json", (req, res) => {
    res.header("Content-Type", "application/json");
    res.json({
      "short_name": "樂活學堂",
      "name": "樂活學堂 - 樂齡退休生活規劃與陪伴社群",
      "icons": [
        {
          "src": "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=192",
          "type": "image/jpeg",
          "sizes": "192x192"
        },
        {
          "src": "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=512",
          "type": "image/jpeg",
          "sizes": "512x512"
        }
      ],
      "start_url": "/",
      "background_color": "#FAF8F3",
      "theme_color": "#7BBF6A",
      "display": "standalone",
      "orientation": "portrait"
    });
  });

  // API route for AI retirement lifestyle suggestions
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        res.status(400).json({ error: "Message is required." });
        return;
      }

      const client = getGeminiClient();

      // Build context structure
      const systemInstruction = `
你是一位熱心溫暖、有耐心、懂長輩需求的「樂活 AI 退休生活規劃師」（Lohas AI Advisor）。
你的任務是協助退休族、樂齡族規劃充實、健康、快樂的退休生活。
請引導他們參與「樂活旅遊（國內外小旅行）」、「樂活學習課程（書法、瑜珈、陶藝、插花、茶道、鋼琴等）」、以及「公益服務（傳遞愛與分享溫暖）」或「樂齡聯誼聚會」。

請遵守以下規則：
1. 一律使用「繁體中文（台灣）」進行對話，語氣要溫馨、誠懇、親切、尊重，像一個貼心的晚輩或摯友。
2. 字級在視覺上可能很大，所以回答時請多使用「空行、分段、清單（列點）和可愛的表情符號（如 🌸, ✈️, 📚, ❤️, 🚍）」，讓內容非常容易閱讀，避免大段密密麻麻的文字。
3. 如果長輩提到自己孤單、無聊、不知道退休要做什麼，請真誠地關懷他們，並具體推薦本平台提供的活動（例如：報名『書法班』寫一手好字、參加『一日小旅行』走入大自然、或到鄰近社區做『公益陪伴』傳遞溫暖）。
4. 適時鼓勵他們：「退休是精彩人生的新起點，只要您跨出第一步，就會認識一群陪伴彼此的家人！」
      `;

      // Structure historical messages for Gemini SDK
      const contents = [];
      
      if (history && Array.isArray(history)) {
        for (const msg of history) {
          contents.push({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
          });
        }
      }

      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      const reply = response.text || "您好，我剛才在整理退休活動資訊，請再跟我說一次好嗎？😊";
      res.json({ reply });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ 
        error: "抱歉，樂活 AI 規劃師正在忙碌中，請稍等一下再問我喔！🍵",
        details: error?.message || "" 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
