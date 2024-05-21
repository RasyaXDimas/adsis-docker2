const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
	foto: String,
	nama: String,
	role: String,
	quote: String,
	goals: Array,
	bakat: Array,
	hobi: Array,
	kelebihan: Array,
});

const itemModel = mongoose.model("item", itemSchema)
module.exports= itemModel