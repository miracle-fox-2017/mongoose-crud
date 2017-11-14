const ObjectId = require('mongodb').ObjectId;
const Books   = require('../models/bookModels')

let createBook = function(req,res){
  let newBook = Books({
    isbn : req.body.isbn,
    title : req.body.title,
    author : req.body.author,
    category : req.body.category,
    stock : req.body.stock
  })
  newBook.save().then(function(){
    res.status(200).send('User Created')
  }).catch(function(err){
    res.status(500).send(err)
    console.log(err)
  })
}

let findBook = function(req,res){
  Books.find().then(function(data_Books){
    res.status(200).send(data_Books)
    console.log('SHow all Books Info')
  }).catch(function(err){
    res.status(500).send(err)
    console.log(err)
  })
}

let editBook = function(req,res){
  let id = {
    _id : ObjectId(req.params.id)
  }
  let updateBook = {
    isbn : req.body.isbn,
    title : req.body.title,
    author : req.body.author,
    category : req.body.category,
    stock : req.body.stock
  }
  Books.findByIdAndUpdate(id, updateBook).then(function(){
    res.status(200).send('1 Books document updated')
    console.log('1 Books document updated')
  }).catch(function(err){
    res.status(500)
    console.log(err)
  })
}

let destroyBook = function(req,res){
  let id = {
    _id : ObjectId(req.params.id)
  }
  Books.findByIdAndRemove(id).then(function(){
    res.status(200).send('1 document deleted')
    console.log('1 document deleted')
  }).catch(function(err){
    res.status(500).send(err)
    console.log(err)
  })
}

module.exports = {
  createBook,
  findBook,
  editBook,
  destroyBook
}