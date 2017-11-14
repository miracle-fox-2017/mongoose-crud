const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const url = "mongodb://localhost:27017/library";
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

module.exports = {
  createBook
}