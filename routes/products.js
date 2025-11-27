const express = require("express");
const router = express.Router();

// Shared in-memory products array
let products = [
  {
    id: "1",
    title: "Lipstick",
    desc: "Smooth matte finish, long-lasting color.",
    price: "$20",
    image: "https://i.ibb.co.com/qFNsQLmY/download-26.jpg",
  },
  {
    id: "2",
    title: "Face Cream",
    desc: "Hydrating daily cream for glowing skin.",
    price: "$35",
    image: "https://i.ibb.co.com/fVDnCN0D/download-27.jpg",
  },
  {
  id: "3",
  title: "Foundation",
  desc: "Lightweight foundation with full coverage.",
  price: "$30",
  image: "https://i.ibb.co.com/xtzz8rbd/download-28.jpg",
},
{
  id: "4",
  title: "Eyeliner",
  desc: "Waterproof eyeliner for sharp, defined lines.",
  price: "$15",
  image: "https://i.ibb.co.com/xK3W927Z/download-29.jpg",
},
{
  id: "5",
  title: "Mascara",
  desc: "Volumizing mascara for fuller eyelashes.",
  price: "$18",
  image: "https://i.ibb.co.com/67GyFQnV/download-30.jpg",
},
{
  id: "6",
  title: "Blush",
  desc: "Silky smooth blush for a natural rosy glow.",
  price: "$22",
  image: "https://i.ibb.co.com/v43GQFf5/download-31.jpg",
},
{
  id: "7",
  title: "Compact Powder",
  desc: "Oil-control compact for a fresh look all day.",
  price: "$25",
  image: "https://i.ibb.co.com/CpfNFLfJ/download-32.jpg",
},
{
  id: "8",
  title: "Makeup Brush Set",
  desc: "High-quality brushes for flawless makeup application.",
  price: "$40",
  image: "https://i.ibb.co.com/xSMKRj5h/download-33.jpg",
},
{
  id: "9",
  title: "Perfume",
  desc: "Long-lasting fragrance with a floral scent.",
  price: "$50",
  image: "https://i.ibb.co.com/8L9pBVww/download-34.jpg",
}

];

// GET all products
router.get("/", (req, res) => {
  res.json(products);
});

// GET product by id
router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// POST new product
router.post("/", (req, res) => {
  const { title, desc, price, image } = req.body;
  if (!title || !desc || !price || !image)
    return res.status(400).json({ message: "All fields are required" });

  const newProduct = {
    id: Date.now().toString(), // simple unique ID
    title,
    desc,
    price,
    image,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// DELETE product
router.delete("/:id", (req, res) => {
  products = products.filter((p) => p.id !== req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
