const Transaction = require('../models/transactionModel');

const create = (req,res) => {
  let transaction = new Transaction({
    member : req.body.member,
    days : req.body.days,
    out_date : req.body.out_date,
    due_date : req.body.due_date,
    in_date : req.body.in_date,
    fine : req.body.fine,
    booklist : req.body.booklist
  })
  
  
  transaction.save()
  .then(success => {
    res.send(success)
  })
  .catch(err => {
    console.log(err)
    res.status(500).send(err)
  })
}

const findAll = (req, res) => {
  Transaction.find()
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

const updateTransaction = (req, res) => {
  Transaction.update({
    _id : req.params.id
  },{
    member : req.body.member,
    days : req.body.days,
    out_date : req.body.out_date,
    due_date : req.body.due_date,
    in_date : req.body.in_date,
    fine : req.body.fine,
    booklist : req.body.booklist
  })
  .then(success => {
    res.send(success)
  })
  .catch(err => {
    res.status(401).send(err)
  })
}

const removeTransaction = (req, res) => {
  Transaction.remove({
    _id : req.params.id
  })
  .then(success => {
    res.send(success)
  })
  .catch(err => {
    res.status(401).send(err)
  })
}

module.exports = {
  create,
  findAll,
  updateTransaction,
  removeTransaction
};