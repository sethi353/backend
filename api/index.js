const express = require("express");
const cors = require("cors");
const productRoutes = require("../routes/products");

const app = express();

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Root route for friendly message
app.get("/", (req, res) => {
  res.send(
    "Express backend is running! Visit /api/products to see all products."
  );
});

// Mount product routes
app.use("/api/products", productRoutes);

module.exports = app; // required for Vercel
