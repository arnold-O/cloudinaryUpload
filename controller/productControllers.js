const catchAsyncWrapper = require("../middleware/catchAsyncWrapper");
const Product = require("../model/productModel");

exports.createProduct = catchAsyncWrapper(async (req, res, next) => {
  const { name, price, image } = req.body;

  const newProduct = await Product.create({
    name,
    price,
    image,
  });
  res.status(200).json({
    message: "create product route",
    newProduct
  });
});

exports.getAllProduct = catchAsyncWrapper(async (req, res, next) => {

  const getProducts = await Product.find({})

  res.status(200).json({
    success:true,
    getProducts
  })


});
