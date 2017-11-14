//require model
const Transaction = require('../models/transactionModel')
const ObjectID = require('mongodb').ObjectID

//create
let create = (req, res) => {
  let book = req.body.booklist.split(',')
  
  let transaction = new Transaction({
      member: ObjectID(req.body.member),
      days: req.body.days,
      out_date: req.body.out_date,
      due_date: req.body.due_date,
      in_date: req.body.in_date,
      fine: req.body.fine,
      booklist: book
  })
  
  transaction.save()
  .then(result=>{
    res.send(result)
  }).catch(err=>{
    res.status(500).send(err)
  })
}

//read
let getAll = (req, res) => {
  Transaction.find()
  .populate('booklist')
  .populate('member')
  .exec()
  .then(result=>{
    res.send(result)
  }).catch(err=>{
    res.status(500).send(err)
  })
}

//update
let update = (req, res) => {
  let book = req.body.booklist.split(',')
  
  let updated = {
      member: ObjectID(req.body.member),
      days: req.body.days,
      out_date: req.body.date,
      due_date: req.body.due_date,
      in_date: req.body.in_date,
      fine: req.body.fine,
      booklist: book
  }
  
  Transaction.update({ _id: req.params.id }, updated)
  .then(result=>{
    res.send(result)
  }).catch(err=>{
    res.status(500).send(err)
  })
}

//delete
let deleteTransaction = (req, res) => {
  Transaction.remove({ _id: req.params.id })
  .then(result=>{
    res.send(result)
  }).catch(err=>{
    res.status(500).send(err)
  })
}

//populated by id
let getById = (req, res) => {
  Transaction.findById(req.params.id)
  .populate('booklist')
  .populate('member')
  .exec()
  .then(trans=>{
    res.send(trans)
  }).catch(err=>{
    res.status(500).send(err)
  })
}

//add book to transaction
let addBook = (req, res) => {
  if(req.params.book_id){
    Transaction.findById(req.params.id)
    .then(trans=>{
      trans.booklist.push(req.params.book_id)
      Transaction.update({ _id: req.params.id }, trans)
      .then(result=>{
        res.send(result)
      }).catch(err=>{
        res.status(500).send(err)
      })
    }).catch(err=>{
      res.status(500).send(err)
    })
  } else {
    res.status(400).send({msg: "input error"})
  }
  

}

module.exports = {
  getAll,
  create,
  update,
  deleteTransaction,
  getById,
  addBook
};