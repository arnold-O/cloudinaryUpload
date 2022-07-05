const catchAsyncWrapper = require("../middleware/catchAsyncWrapper");
const path = require('path')
const cloudinary = require('cloudinary').v2

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
// upload using Cloudinary

exports.uploadimgCloud = catchAsyncWrapper(async (req, res, next)=>{

    const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
        use_filename:true,
        folder:'fileupload'
    })

    res.status(200).json({
        image: result.securre_url
    })
    

})