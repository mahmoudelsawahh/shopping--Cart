const mongoose = require("mongoose");

const productSchema = require("../schema/ProductSchema");

const product = mongoose.model("product", productSchema);

module.exports = product;
