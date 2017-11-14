const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library', { useMongoClient: true });

var bookSchema = mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    category: String,
    stock: Number
});

var bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;
