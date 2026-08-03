import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini API client safely
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// API Route for AI Travel Assistant
app.post("/api/ai-chat", async (req, res) => {
  try {
    const { prompt, context } = req.body;
    if (!prompt) {
      res.status(400).json({ error: "Prompt is required" });
      return;
    }

    const ai = getGeminiClient();
    if (!ai) {

      res.status(200).json({
        reply: "【本地智囊回复】针对威海与荣成之行（2大1小，14岁男孩）：\n1. 14岁青少年对【布鲁威斯号沉船】和【海驴岛环岛喂海鸥】最感兴趣，酷炫且极具视觉冲击力；\n2. 推荐第一天晚餐去韩乐坊吃韩式烤肉或海肠捞饭，符合年轻人口味；\n3. 赶海注意查看潮汐表，退潮前1小时到达最佳！",
        fallback: true
      });
      return;
    }

    const systemInstruction = `你是一位威海和荣成当地资深金牌旅游专家兼亲子游规划师。
你的服务对象是【2个大人 + 1个14岁男孩】的家庭组合。
男孩特点：对军事科技（刘公岛潜艇/军舰）、酷炫打卡点（布鲁威斯号沉船）、海边玩水/赶海、海上飞艇喂海鸥、地道韩餐和烤肉非常感兴趣，不喜欢过于死板单调的静态景点。
请用专业、亲切、富有画面感且极具实用性的中文回答用户的咨询。语言逻辑清晰，给出的建议包含路线、避坑提示、美食和时间安排。`;

    const fullPrompt = `${context ? `上下文知识: ${context}\n\n` : ""}用户问题: ${prompt}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: fullPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ reply: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: "AI 助手暂时遇到了小问题",
      details: error.message || String(error)
    });
  }
});

async function startServer() {
  // Vite dev middleware vs Production static serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
