const express = require("express");

const app = express();
const fileupload = require("express-fileupload");

app.use(express.static("./public"));
app.use(express.json());
app.use(fileupload());

// routes
const ProductRoutes = require("./route/productRoute");

app.get("/", (req, res) => {
  res.send("here we go");
});

app.use("/api/v1/products", ProductRoutes);

module.exports = app;
