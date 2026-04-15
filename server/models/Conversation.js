const mongoose = require('mongoose');

// Define the blueprint for our data
const ConversationSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true // The raw text of the conversation
  },
  sentiment: {
    type: String, // E.g., 'Positive', 'Negative', 'Neutral'
  },
  summary: {
    type: String, // A short summary of the chat
  },
  insights: {
    type: String, // Key takeaways
  },
  objections: {
    type: String, // Any complaints or hesitations from the customer
  },
  suggestions: {
    type: String, // How to improve for next time
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically saves the current date and time
  }
});

// Create the model using the schema
const Conversation = mongoose.model('Conversation', ConversationSchema);

module.exports = Conversation;
