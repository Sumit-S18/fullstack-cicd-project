
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB when MONGO_URL is provided.
// The API can still start while MongoDB is being configured.
const mongoUrl = process.env.MONGO_URL;

if (mongoUrl) {
  mongoose
    .connect(mongoUrl)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((error) => {
      console.error("MongoDB connection failed:", error.message);
    });
} else {
  console.log("MONGO_URL not set; database connection is not configured yet.");
}

// Backend API
app.get("/api", (req, res) => {
  res.json({
    message: "Backend Running Successfully",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
