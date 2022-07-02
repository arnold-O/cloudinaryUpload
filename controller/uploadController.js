const catchAsyncWrapper = require("../middleware/catchAsyncWrapper");

exports.uploadProductImage = catchAsyncWrapper(async(req,res,next)=>{
    res.status(201).json({
        message:"we gooooooooddddddd"
    })
})