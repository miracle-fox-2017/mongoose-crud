const Book = require('../models/bookModel');

const create = (req,res) => {
  let book = new Book({
    isbn : req.body.isbn,
    title : req.body.title,
    author : req.body.author,
    category : req.body.category,
    stock : req.body.stock
  })
  
  book.save()
  .then(success => {
    res.send(success)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

const findAll = (req, res) => {
  Book.find()
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

const updateBook = (req, res) => {
  Book.update({
    _id : req.params.id
  },{
    isbn : req.body.isbn,
    title : req.body.title,
    author : req.body.author,
    category : req.body.category,
    stock : req.body.stock
  })
  .then(success => {
    res.send(success)
  })
  .catch(err => {
    res.status(401).send(err)
  })
}

const removeBook = (req, res) => {
  Book.remove({
    _id : req.params.id
  })
  .then(success => {
    res.send(success)
  })
  .catch(err => {
    res.status(401).send(err)
  })
}

module.exports = {
  create,
  findAll,
  updateBook,
  removeBook
};