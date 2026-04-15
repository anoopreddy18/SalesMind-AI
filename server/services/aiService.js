const Groq = require("groq-sdk");
require("dotenv").config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const analyzeTextWithAI = async (text) => {
  try {
    const prompt = `
You are an expert sales analyst.

Analyze the conversation and return JSON:
{
  "sentiment": "",
  "summary": "",
  "insights": "",
  "objections": "",
  "suggestions": ""
}

Conversation:
"${text}"

ONLY return JSON.
`;

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    let content = response.choices[0].message.content;

    // Clean markdown if present
    content = content.replace(/```json|```/g, "").trim();

    const data = JSON.parse(content);

    return data;

  } catch (error) {
    console.error("Groq error:", error.message);
    throw new Error("AI failed");
  }
};

module.exports = { analyzeTextWithAI };