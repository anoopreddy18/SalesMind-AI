const express = require('express');
const router = express.Router();
const analysisController = require('../controllers/analysisController');

// POST /api/analyze -> Sends text, gets AI result and saves it
router.post('/analyze', analysisController.analyzeConversation);

// GET /api/conversations -> Fetches all saved AI results
router.get('/conversations', analysisController.getAllConversations);

module.exports = router;
