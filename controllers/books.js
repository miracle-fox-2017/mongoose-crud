const Book = require('../models/bookModel')

let findAll = (req, res) => {
  Book.find()
  .then(books => res.send(books))
  .catch(err => res.status(500).send(err))
}

let create = (req, res) => {
  book = new Book({
    isbn : req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })

  book.save()
  .then(book => {
    res.send(book)
  })
  .catch(err => res.status(500).send(err))
}

let update = (req, res) => {
  Book.findById(req.params.id)
  .then(book => {
    // replace data book with new data book
    book.isbn = req.body.isbn || book.isbn;
    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    book.category = req.body.category || book.category;
    book.stock = req.body.stock || book.stock;

    // save update data
    book.save()
    .then(updateBook => res.send(updateBook))
    .catch(err => res.status(500).send(err))
  })
}

let remove = (req, res) => {
  Book.findByIdAndRemove(req.params.id)
  .then(removeBook => res.send(removeBook))
  .catch(err => res.status(500).send(err))
}

module.exports = {
  findAll,
  create,
  update,
  remove
}
