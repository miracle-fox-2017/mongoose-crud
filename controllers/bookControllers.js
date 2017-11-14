const mongoose = require('mongoose').connect('mongodb://localhost:27017/library');
const ObjectId = require('mongodb').ObjectID;
const Book = require('../models/bookModel');

let getAllBooks = (req, res) => {
  Book.find({}, (err, dataBooks)=>{
    if(err) res.status(500).send(err);
    res.send(dataBooks)
  })
}

let createBook = (req, res) => {
  console.log(req.body);
  let input = req.body
  let inputBook = new Book(
  {
    isbn : input.isbn,
    title: input.title,
    author: input.author,
    category: input.category,
    stock: input.stock,
  });
  //save book
  inputBook.save((err, bookSaved)=>{
    if(err) res.status(500).send(err);
    res.send({
      book: bookSaved,
      messages : 'Input successed'
    })
  })
}

let deleteBook = (req, res) => {
  console.log(req.params.id);
  let id = {
    _id : ObjectId(req.params.id)
  }
  Book.findByIdAndRemove(id)
  .then(bookRemoved =>{
    res.send({
      book: bookRemoved,
      messages: 'Remove successed'
    })
  })
  .catch(err=>{
    res.status(500).send(err)
  })
}

let updateBook = (req, res) => {
  console.log(req.params.id);
  let edit = req.body
  let id = {
    _id: ObjectId(req.params.id)
  }
  let book = {
    isbn : edit.isbn,
    title: edit.title,
    author: edit.author,
    category: edit.category,
    stock: edit.stock
  }
  Book.findByIdAndUpdate(id, book)
  .then(bookUpdated=>{
    res.send({
      book: bookUpdated,
      messages: 'Update successed'
    })
  })
  .catch(err=>{
    res.status(500).send(err)
  })
}

module.exports = {
  createBook,
  getAllBooks,
  deleteBook,
  updateBook
}
