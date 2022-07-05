const express = require("express");

const app = express();
const fileupload = require("express-fileupload");

// settin up cloudinary functionality
// use version 2 .v2
const cloudinary =require('cloudinary').v2

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET

})

app.use(express.static("./public"));
app.use(express.json());
app.use(fileupload({useTempFiles:true}));

// routes
const ProductRoutes = require("./route/productRoute");

app.get("/", (req, res) => {
  res.send("here we go");
});

app.use("/api/v1/products", ProductRoutes);

module.exports = app;
