-------------Create Server Api -----------------------[get , post , remove] Data and create DataBase in mongodb atls

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const app = express();
// app.use(bodyParser.json());
// mongoose
//   .connect("mongodb://localhost/react-shopping-cart", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((res) => {
//     console.log("Connection Done");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// const product = mongoose.model(
//   "product",
//   new mongoose.Schema({
//     id: String,
//     title: String,
//     image: String,
//     desc: String,
//     price: Number,
//     size: [String],
//   })
// );

// app.get("/api/products", async (req, res) => {
//   const products = await product.find();
//   res.send(products);
// });

// app.post("/api/products", async (req, res) => {
//   const newProduct = new product(req.body);
//   const saveP = await newProduct.save();
//   res.send(saveP);
// });

// app.delete("/api/products/:id", async (req, res) => {
//   const deleteProduct = await product.findByIdAndDelete(req.params.id);
//   res.send(deleteProduct);
// });

// app.listen(5000, () => {
//   console.log("http://localhost:5000");
// });