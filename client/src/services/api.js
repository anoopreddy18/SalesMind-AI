// This file handles all communication with our backend server

const API_BASE_URL = 'http://127.0.0.1:5000/api';

// Sends a new conversation to be analyzed
export const analyzeConversation = async (text) => {
  try {
    const response = await fetch(`${API_BASE_URL}/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // We wrap the text in a JSON object because that's what the backend expects
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Convert the string response back to a JavaScript object
    return await response.json();
  } catch (error) {
    console.error('Error analyzing conversation:', error);
    throw error;
  }
};

// Gets all previously analyzed conversations
export const getConversations = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/conversations`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching conversations:', error);
    throw error;
  }
};
