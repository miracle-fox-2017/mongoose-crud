const Books = require('../models/books')

let createData = function(req,res){
  Books.create({
    isbn : req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  },(err,result)=>{
    if(!err){
      res.send(result)
    }
    else {
      res.send(err)
    }
  })
}

let viewData = function(req,res){
  Books.find({},function(err,result){
    if (!err) {
      res.send(result)
    }
    else {
      res.send(err)
    }
  })
}

let deleteData = function(req,res){
  Books.findByIdAndRemove(
    req.params.id, (err,result)=>{
      if (!err) {
        res.send(result)
      }
      else {
        res.send(err)
      }
    }
  )
}

let editData = function(req,res){
  Books.updateOne(req.params.id),
  {
    isbn : req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  },(err,result)=>{
    if(!err){
      res.send(result)
    }
    else {
      res.send(err)
    }
  }
}




module.exports = {
  createData,
  viewData,
  deleteData,
  editData
};
