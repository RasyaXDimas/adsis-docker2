//mongodb+srv://rasyaxd:<password>@cluster0.aufiscp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require('express')
const connectDB = require('./db.js')
const itemModel = require('./models/item.js')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors())
connectDB()

app.get('/',async(req, res)=>{
    const items = await itemModel.find()
    res.json(items)
})

app.listen(8000, ()=>{
    console.log("dah jalan")
})