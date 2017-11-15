//require model
const Book = require('../models/bookModel')

//create
let create = (req, res) => {
  let book = new Book({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      catagory: req.body.catagory,
      stock: Number(req.body.stock)
  })
  
  book.save()
  .then(result=>{
    res.send(result)
  }).catch(err=>{
    res.status(500).send(err)
  })
}

//read
let getAll = (req, res) => {
  Book.find()
  .then(result=>{
    res.send(result)
  }).catch(err=>{
    res.status(500).send(err)
  })
}

//update
let update = (req, res) => {
  let updated = {
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    catagory: req.body.catagory,
    stock: Number(req.body.stock)
  }
  
  Book.update({ _id: req.params.id }, updated)
  .then(result=>{
    res.send(result)
  }).catch(err=>{
    res.status(500).send(err)
  })
}

//delete
let deleteBook = (req, res) => {
  Book.remove({ _id: req.params.id })
  .then(result=>{
    res.send(result)
  }).catch(err=>{
    res.status(500).send(err)
  })
}


module.exports = {
  getAll,
  create,
  update,
  deleteBook
};