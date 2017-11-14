const bookModel = require('../models/bookModel')


var findAll = (req, res) => {
  bookModel.find().then((hasil) => {
    res.send(hasil)
  })
}

var findById = (req, res) => {
  bookModel.findOne({_id: req.params.id}).then((hasil) => {
    res.send(hasil)
  })
}

var insertOne = (req, res) => {
  bookModel.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }).then(() => {
    res.send('1 document telah disimpan')
  })
}

var deleteOne = (req, res) => {
  bookModel.remove({_id: req.params.id}).then(() => {
    res.send('1 document telah dihapus')
  })
}

var editOne = (req, res) => {
  bookModel.update({_id: req.params.id}, {
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }).then(() => {
    res.send('1 document telah di edit')
  })
}

module.exports = {
  findAll,
  insertOne,
  findById,
  deleteOne,
  editOne
};
