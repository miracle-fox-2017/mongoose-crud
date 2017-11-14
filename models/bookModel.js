const mongoose = require('mongoose').connect('mongodb://localhost/library');

let bookSchema = mongoose.Schema({
  isbn : String,
  title : String,
  author : String,
  category : String,
  stock : Number
})

let bookModel = mongoose.model('Book', bookSchema)

module.exports = bookModel;