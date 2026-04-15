const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
// Allows our React frontend to communicate with this backend
app.use(cors());
// Allows us to read JSON data from the request body
app.use(express.json());

// Import routes
const analysisRoutes = require('./routes/analysisRoutes');

// Connect to MongoDB
// We use a simple MongoDB connection string (usually defined in .env)
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/salesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB successfully!'))
.catch((err) => console.error('❌ Failed to connect to MongoDB:', err));

// Use the routes
// All requests starting with /api will go to analysisRoutes
app.use('/api', analysisRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
