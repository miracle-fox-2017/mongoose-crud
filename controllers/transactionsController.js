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

module.exports = {
  getAll,
  create,
  update,
  deleteTransaction,
  getById
};