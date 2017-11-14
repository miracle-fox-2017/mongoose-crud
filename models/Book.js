const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/library')

var bookSchema = mongoose.Schema({
  isbn:  String,
  title: String,
  author: String,
  category: String,
  stock: Number
});

const bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;
