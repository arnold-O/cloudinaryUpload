const express = require('express')

const app = express()


app.use(express.json())





app.get('/', (req, res)=>{

    res.send('here we go')
})





module.exports = app