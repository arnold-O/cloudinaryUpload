const catchAsyncWrapper = require("../middleware/catchAsyncWrapper");





exports.createProduct = catchAsyncWrapper( async(req, res, next)=>{




    


    res.status(200).json({
        message:"create product route",
            
    })
})


exports.getAllProduct = catchAsyncWrapper(async(req,res,next)=>{


}
)





