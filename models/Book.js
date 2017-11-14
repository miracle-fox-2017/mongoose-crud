const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var bookSchema = mongoose.Schema({
  isbn:  String,
  title: String,
  autor: String,
  category: String,
  stock: Number
});

const bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;
