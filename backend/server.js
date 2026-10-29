
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const mongoUrl =
  process.env.MONGO_URL || "mongodb://localhost:27017/studentdb";

mongoose
  .connect(mongoUrl, { serverSelectionTimeoutMS: 5000 })
  .then(() => console.log("MongoDB Connected"))
  .catch((error) =>
    console.error("MongoDB connection error:", error.message)
  );

app.get("/api", (req, res) => {
  res.json({
    message: "Backend Running Successfully"
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
