const express = require("express");
const product = require("../models/ProductModel");
const router = express.Router();
router.get("/api/products", async (req, res) => {
  const products = await product.find();
  res.send(products);
});

router.post("/api/products", async (req, res) => {
  const newProduct = new product(req.body);
  const saveP = await newProduct.save();
  res.send(saveP);
});

router.delete("/api/products/:id", async (req, res) => {
  const deleteProduct = await product.findByIdAndDelete(req.params.id);
  res.send(deleteProduct);
});

module.exports = router;
