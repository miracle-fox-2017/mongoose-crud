//require model
const Transaction = require('../models/transactionModel')
const ObjectID = require('mongodb').ObjectID

//require helper
const calculateFine = require('../helper/calculateFine');

//create
let create = (req, res) => {
  let book = req.body.booklist.split(',')
  let today = new Date()
  
  let transaction = new Transaction({
      member: ObjectID(req.body.member),
      days: req.body.days,
      out_date: today,
      due_date: new Date(today.getTime() + +req.body.days*24*60*60*1000),
      in_date: null,
      fine: null,
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
  Transaction.findById(req.params.id)
  .then(trans=>{
    let today = new Date()
    let fines = calculateFine(trans.due_date);
    let updated = {
        member: ObjectID(trans.member),
        days: trans.days,
        out_date: trans.date,
        due_date: trans.due_date,
        in_date: today,
        fine: fines,
        booklist: trans.booklist
    }
    
    Transaction.update({ _id: req.params.id }, updated)
    .then(result=>{
      res.send(result)
    }).catch(err=>{
      res.status(500).send(err)
    })
    
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

module.exports = {
  getAll,
  create,
  deleteTransaction,
  update,
  getById
};