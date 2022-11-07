require('dotenv').config()
const express = require('express')
const sequelize=require('./db')
const PORT = process.env.PORt || 5000
const models = require('./models/models')
const app = express()
const cors =require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')


app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorHandler)



const start = async ()=>{
    try{
         await sequelize.authenticate()
         await sequelize.sync()
        app.listen(PORT,()=>console.log(`server started on port ${PORT}`))
    } catch (e){
        console.log(e);
    }
}

start()


