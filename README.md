SalesMind AI

SalesMind AI is a full-stack web application that analyzes sales conversations and converts them into meaningful business insights using an AI model. It is designed to simulate how modern sales teams can leverage AI to better understand customer behavior, identify objections, and improve their sales approach.

Overview

The application allows users to input raw sales conversation transcripts and generates structured outputs such as sentiment analysis, key insights, customer objections, and actionable suggestions. All processed data is stored and can be viewed later through a dashboard interface.

This project focuses on combining full-stack development with practical AI integration to build a real-world use case.

Features
Analyze sales conversations using an AI model
Detect sentiment (Positive, Neutral, Negative)
Extract key insights from conversations
Identify customer objections
Provide suggestions for improving sales strategy
Store and view past analyses in a dashboard
Clean and minimal user interface for ease of use
Tech Stack

Frontend:

React (Create React App)
CSS

Backend:

Node.js
Express.js

Database:

MongoDB (Atlas)

AI Integration:

Groq API (LLM-based analysis)
Project Structure
SalesMind-AI/
│
├── client/        # React frontend
├── server/        # Node.js backend
└── README.md
How It Works
The user enters a sales conversation in the frontend.
The data is sent to the backend through an API request.
The backend processes the input using an AI model.
The AI generates structured insights such as sentiment, objections, and suggestions.
The results are stored in MongoDB.
The frontend displays the output and allows users to view past analyses in the dashboard.
Getting Started
Prerequisites
Node.js installed
MongoDB (local or Atlas)
Groq API key
Installation

Clone the repository:

git clone https://github.com/anoopreddy18/SalesMind-AI.git
cd SalesMind-AI
Backend Setup
cd server
npm install

Create a .env file inside the server folder and add:

GROQ_API_KEY=your_api_key
MONGO_URI=your_mongodb_connection_string

Start the backend:

npm start
Frontend Setup

Open a new terminal:

cd client
npm install
npm start
Environment Variables

The project uses environment variables for sensitive data. These are not included in the repository for security reasons.

Refer to the .env.example file for required variables.

Usage
Enter a sales conversation in the input field
Click "Analyze"
View generated insights
Navigate to the dashboard to see saved analyses
Future Improvements
Improve UI/UX with more advanced design elements
Add authentication and user accounts
Enable export/download of analysis results
Add real-time analytics and charts
Improve AI prompt tuning for better accuracy
Notes

This project was built as a practical demonstration of integrating AI into a full-stack application. It reflects real-world use cases where AI can assist in decision-making and analysis workflows.

License

This project is open-source and available for learning and demonstration purposes.
