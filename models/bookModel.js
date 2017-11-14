const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/library');
const Schema   = mongoose.Schema

var bookSchema = new Schema({
	isbn : String,
	title : String,
	author : String,
	category : String,
	stock : Number,
	createdAt : Date,
	updatedAt : Date
})

var Book = mongoose.model('Book', bookSchema)

module.exports = Book