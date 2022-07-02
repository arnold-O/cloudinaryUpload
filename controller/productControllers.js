const catchAsyncWrapper = require("../middleware/catchAsyncWrapper");
const Product = require("../model/productModel");

exports.createProduct = catchAsyncWrapper(async (req, res, next) => {

    const {name, price, image} = req.body

    const newProduct = await Product.create({
        name,
        price,
        image

    })
  res.status(200).json({
    message: "create product route",
  });
});

exports.getAllProduct = catchAsyncWrapper(async (req, res, next) => {});
