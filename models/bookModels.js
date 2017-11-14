const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const BookSchema = new Schema({
  isbn : String,
  title : String,
  author : String,
  category : String,
  stock : String
})

const bookModels = mongoose.model('Books', BookSchema)

module.exports = bookModels