




const express = require('express')
const { createProduct, getAllProduct } = require('../controller/productControllers')
const { uploadProductImage, uploadimgCloud } = require('../controller/uploadController')

const router = express()



router.route('/').post(createProduct).get(getAllProduct)

// router.route('/uploads').post(uploadProductImage)
router.route('/uploads').post(uploadimgCloud)




module.exports = router

