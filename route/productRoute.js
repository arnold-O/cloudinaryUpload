




const express = require('express')
const { createProduct, getAllProduct } = require('../controller/productControllers')
const { uploadProductImage, uploadingCloud } = require('../controller/uploadController')

const router = express()



router.route('/').post(createProduct).get(getAllProduct)

// router.route('/uploads').post(uploadProductImage)
router.route('/uploads').post(uploadingCloud)




module.exports = router

