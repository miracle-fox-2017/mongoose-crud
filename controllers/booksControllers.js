const Book = require('../models/bookModels');

let getAllBook = (req, res) => {
  Book.find().then(dataBook => {
    res.send(dataBook);
  })
  .catch(err => {
    res.status(404).send(err);
  });
}

let addBook = (req, res) => {
  let isbn = req.body.isbn;
  let title = req.body.title;
  let author = req.body.author;
  let category = req.body.category;
  let stock = req.body.stock;
  Book.create({
    isbn: isbn,
    title: title,
    author: author,
    category: category,
    stock: stock
  })
  .then(dataBook => {
    res.send(dataBook);
  })
  .catch(err => {
    res.send(err);
  });
}

let editBook = (req, res) => {
  let isbn = req.body.isbn;
  let title = req.body.title;
  let author = req.body.author;
  let category = req.body.category;
  let stock = req.body.stock;
  Book.update({ _id: req.params.id },
    {
      isbn: isbn,
      title: title,
      author: author,
      category: category,
      stock: stock
    })
    .then(dataBook => {
      res.send('book has been updated');
    })
    .catch(err => {
      res.send(err);
    });
  }

  let deleteById = (req, res) => {
    Book.remove({ _id: req.params.id }).then(dataBook => {
      res.send('book has been deleted');
    })
    .catch(err => {
      res.send(err);
    });
  }

  let getById = (req, res) => {
    Book.findOne({ _id: req.params.id }).then(dataBook => {
      res.send(dataBook);
    })
    .catch(err => {
      res.send(err);
    });
  }

  module.exports = {
    getAllBook,
    addBook,
    editBook,
    deleteById,
    getById,
  };
