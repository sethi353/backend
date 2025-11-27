const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const productRoutes = require("../routes/products");

const app = express();

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

// Wrap the app with serverless
module.exports = serverless(app);
