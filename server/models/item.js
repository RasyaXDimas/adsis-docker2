const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    nama: String,
    role: String
})

const itemModel = mongoose.model("item", itemSchema)
module.exports= itemModel