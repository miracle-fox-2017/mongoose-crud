const mongoose = require('mongoose').connect('mongodb://localhost:27017/library');
const ObjectId = require('mongodb').ObjectID;
const Transaction = require('../models/transactionsModel');

let getAllTransactions = (req, res) => {
  Transaction.find()
  .then(dataTransactions =>{
    res.send(dataTransactions)
  })
  .catch(err=>{
    res.status(500).send(err)
  })
}

let createTransaction = (req, res) => {
  console.log(req.body);
  let input = req.body
  let data;
  if(typeof input.booklist === 'string'){
    data = input.booklist.split(',')
  } else {
    data = input.booklist
  }
  let now = new Date();
  now.setDate(now.getDate() + +input.days);
  let tanggal = new Date(now)
  let inputTransaction = new Transaction(
  {
    days : input.days,
    member: input.member,
    due_date: tanggal,
    booklist: data
  });
  //save book
  inputTransaction.save((err, transactionSaved)=>{
    if(err) res.status(500).send(err);
    res.send({
      transaction: transactionSaved,
      messages : 'Input successed'
    })
  })
}

let deleteTransaction = (req, res) => {
  console.log(req.params.id);
  let id = {
    _id : ObjectId(req.params.id)
  }
  Transaction.findByIdAndRemove(id)
  .then(transactionRemoved => {
    res.send({
      transaction: transactionRemoved,
      messages: 'Remove transaction successed'
    })
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

let backBooking = (req, res) => {
  let id = {
    _id : ObjectId(req.params.id)
  }
  Transaction.findOne(id)
  .then(transaction => {
    let kembali = new Date().getDate()
    let batasKembali = transaction.due_date.getDate()
    let fine = (batasKembali - kembali) * 1000;
    transaction.fine = fine,
    transaction.in_date = new Date()
    transaction.save((err, hasilEdit)=>{
      if(!err){
        res.send({
          denda : hasilEdit.fine,
          dataTransactions: hasilEdit
        })
      } else {
        console.log(err);
      }
    })
  })
  .catch(err=>{
    res.status(500).send(err)
  })
}

let getTransactionDetails = (req, res) => {
  let id = {
    _id: ObjectId(req.params.id)
  }
  Transaction.findOne(id)
  .populate('member')
  .populate('booklist')
  .exec((err, Details)=>{
    if(!err){
      res.send(Details)
    } else {
      res.status(500).send(err)
    }
  })
}
module.exports = {
  createTransaction,
  getAllTransactions,
  deleteTransaction,
  getTransactionDetails,
  backBooking
}
