const url = 'mongodb://localhost:27017/perpustakaan';
const mongoose = require('mongoose').connect(url);
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	isbn: String,
	title:  String,
	author:   String,
	category: String,
	stock: Number,
	createdAt: { type: Date, default: Date.now }
});

const BookModel = mongoose.model('Book', bookSchema);
module.exports = BookModel;