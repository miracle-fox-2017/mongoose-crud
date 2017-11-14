var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');
var Schema = mongoose.Schema;

// create a schema
var bookSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number,
  created_at: Date,
  updated_at: Date
});

// we need to create a model using it
var bookModels = mongoose.model('books', bookSchema);

// make this available to our users in our Node applications
module.exports = bookModels;
