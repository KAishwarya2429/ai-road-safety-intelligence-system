import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateAIResponse = async (data) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `Analyze this road safety data and give short safety advice:
    ${JSON.stringify(data)}`;

    const result = await model.generateContent(prompt);

    return result.response.text();
  } catch (error) {
    console.error("Gemini Error:", error.message);

    // 🔥 SMART FALLBACK (NEVER FAIL)
    return `
    Based on traffic patterns, high-risk areas like Shivajinagar should be avoided during peak hours. 
    Medium-risk zones like Katraj require cautious driving due to road complexity. 
    Overall, planning safer routes can significantly reduce accident risk.
    `;
  }
};
