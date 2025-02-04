const express = require("express");   // Import express
const mongoose = require("mongoose"); // Import mongoose
const dotenv = require("dotenv");     // Import dotenv (for secret keys)
const cors = require("cors");         // Import cors

dotenv.config(); // Load environment variables from .env file

const app = express();  // Create an express app

app.use(cors());  // Enable cross-origin requests
app.use(express.json());  // Allow JSON data in requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.log("❌ Error: ", err));

// Test Route (Check if API is working)
app.get("/", (req, res) => {
  res.send("Hello! Backend is working 🚀");
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
