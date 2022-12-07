const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/route");
const app = express();
app.use(bodyParser.json());
app.use("/", router);
mongoose
  .connect("mongodb://localhost/react-shopping-cart", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Connection Done");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
