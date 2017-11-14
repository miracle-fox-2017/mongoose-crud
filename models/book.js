const mongoose = require('mongoose').connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;


const bookSchema = new Schema({
	isbn : String,
	title : String,
	author : String,
	category : String,
	stock : Number,
	createdAt : {
		type : Date,
		default : Date.now()
	}
})

const bookModel = mongoose.model('book',bookSchema);

module.exports = bookModel