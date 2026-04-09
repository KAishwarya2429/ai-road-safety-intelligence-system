import { analyzeRisk } from "../services/riskAnalyzer.js";
import { generateAIResponse } from "../services/aiService.js";

export const getSafetyData = async (req, res) => {
  try {
    const riskData = analyzeRisk();
    const aiResponse = await generateAIResponse(riskData);

    res.json({
      zones: riskData,
      ai: aiResponse,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
