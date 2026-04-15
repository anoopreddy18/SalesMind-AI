# SalesMind AI

A modern, production-ready AI-powered Sales Intelligence SaaS dashboard built on the MERN stack.

## 🚀 Overview
SalesMind AI allows teams to analyze raw text from customer interactions. By utilizing an Express backend and OpenAI natively, it processes raw sales conversations and securely extracts critical sentiment analysis, structured summaries, insights, pinpointed customer objections, and actionable suggestions. All results are logged on an interactive dashboard via MongoDB.

## 🧱 Tech Stack
- **Frontend**: React (Create React App), CSS Design System (Custom), React Router DOM
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **AI Integration**: OpenAI API (Via Groq SDK mapped to Llama alternatives where configured)

## 📌 Feature Highlights
1. **Analyze Interface**: Immediate processing of sales transcripts with comprehensive extraction.
2. **Dashboard Module**: View historical analytics, conversion statistics over time, and a sleek tabular layout of all conversations.
3. **Responsive UI/UX**: Crafted entirely from scratch with an aesthetic, highly usable SaaS-grade layout framework.

## 📸 Screenshots
*(Insert screenshots highlighting the new SalesMind AI Sidebar, Analyze inputs, Dashboard, and AI formatted reports here)*

## 📖 How to Connect & Run

### Step 1: Clone or setup the project
Ensure you have both `client` and `server` directories intact.

### Step 2: Ensure Node & DB are Running (Server)
1. Navigate to the server: `cd server`
2. `npm install` requirements.
3. Setup `.env` config with `GROQ_API_KEY` (or OpenAI). Populate `MONGO_URI`.
4. Run server: `npm start` (Operates on `:5000`)

### Step 3: Run the Application (Frontend)
1. Open a new designated terminal window and `cd client`.
2. `npm install` packages and layout dependencies.
3. Boot up the user interface: `npm start`.
4. Your modern browser application runs instantly mapped to `http://localhost:3000`.
