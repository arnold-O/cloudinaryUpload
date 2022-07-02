const mongoose = require('mongoose')

const app = require('./app')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})





const DB = process.env.MONGO_URI


mongoose.connect(DB, {}).then((conn)=>{
    console.log(conn.connection)

})





const PORT =process.env.PORT || 5000


app.listen(PORT,()=>{
    console.log(`port running on ${PORT}`)
})