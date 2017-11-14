const mongoose = require('mongoose').connect('mongodb://localhost:27017/booksstore')

const bookSchema = mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  catagory: String,
  stock: Number,
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const bookModel = mongoose.model('Book', bookSchema)

module.exports = bookModel;