const catchAsyncWrapper = require("../middleware/catchAsyncWrapper");
const path = require('path')

exports.uploadProductImage = catchAsyncWrapper(async(req,res,next)=>{

    let uploadImage = req.files.image 
    const imagePath = path.join(__dirname, '../public/uploads/'+`${uploadImage.name}`)

    await uploadImage.mv(imagePath)
    console.log(req.files)
    return res.status(201).json({
        message:"we gooooooooddddddd",
        image: { src: `/uploads/${uploadImage.name}` }
    })
})