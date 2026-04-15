const Conversation = require('../models/Conversation');
const { analyzeTextWithAI } = require('../services/aiService');

// This function handles the POST /api/analyze request
const analyzeConversation = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Please provide conversation text.' });
    }

    // 1. Send text to our AI service
    const aiResult = await analyzeTextWithAI(text);

    // 2. Create a new Conversation record in MongoDB
    const newConversation = new Conversation({
      text: text,
      sentiment: aiResult.sentiment,
      summary: aiResult.summary,
      insights: aiResult.insights,
      objections: aiResult.objections,
      suggestions: aiResult.suggestions
    });

    // 3. Save to database
    await newConversation.save();

    // 4. Send back the saved record to the React frontend
    res.status(201).json(newConversation);

  } catch (error) {
    console.error('Error in analyzeConversation:', error);
    res.status(500).json({ error: 'Server error analyzing conversation.' });
  }
};

// This function handles the GET /api/conversations request
const getAllConversations = async (req, res) => {
  try {
    // .find() gets all records, .sort() puts the newest ones first
    const conversations = await Conversation.find().sort({ createdAt: -1 });
    res.status(200).json(conversations);
  } catch (error) {
    console.error('Error in getAllConversations:', error);
    res.status(500).json({ error: 'Server error fetching conversations.' });
  }
};

module.exports = {
  analyzeConversation,
  getAllConversations
};
