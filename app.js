const express = require('express')

const app = express()


app.use(express.json())


// routes
const ProductRoutes = require('./route/productRoute')


app.get('/', (req, res)=>{

    res.send('here we go')
})


app.use('/api/v1/products', ProductRoutes)




module.exports = app