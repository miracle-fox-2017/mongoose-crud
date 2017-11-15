const Book = require('../models/Book')
const ObjectId = require('mongodb').ObjectId

let findAll = (req, res) => {
  Book.find()
  .then(books => res.send(books))
  .catch(err => res.status(500).send(err))
}

let create = (req, res) => {
  let obj = {
    isbn : req.body.isbn,
    title : req.body.title,
    author : req.body.author,
    category : req.body.category,
    stock : req.body.stock
  }

  Book.create(obj)
  .then(() => res.send('success create new document'))
  .catch(err => res.status(500).send(err))
}

let update = (req, res) => {
  let id = {_id: ObjectId(req.params.id)}
  Book.findOne(id)
  .then(book => {
    book.isbn = req.body.isbn || book.isbn
    book.title = req.body.title || book.title
    book.author = req.body.author || book.author
    book.category = req.body.category || book.category
    book.stock = req.body.stock || book.stock

    book.save()
    .then(book => res.send(book))
    .catch(err => res.status(500).send(err))
  })
  .catch(err => res.status(500).send(err))
}

let destroy = (req, res) => {
  let id = {_id: ObjectId(req.params.id)}

  Book.deleteOne(id)
  .then(() => res.send('success delete document'))
  .catch(err => res.status(500).send(err))
}

module.exports = {
  findAll,
  create,
  update,
  destroy
};
