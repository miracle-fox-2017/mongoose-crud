const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var bookSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
})

const Books = mongoose.model('Books',bookSchema)
module.exports = Books
