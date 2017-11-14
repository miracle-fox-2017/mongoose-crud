const ObjectId = require('mongodb').ObjectId
const Transactions = require('../models/transactionModels')

const createTransactions = function(req,res){
  // due date
  let now = new Date()
  let sumDate = now.setDate(+req.body.days + now.getDate())
  let dueDate = new Date(sumDate)

  let newTransactions = Transactions({
    member : req.body.member,
    days : req.body.days,
    due_date : dueDate,
    booklist : req.body.booklist
  })
  newTransactions.save().then(function(){
    res.status(200).send('1 Transaction Created')
    console.log('1 Transaction Created')
  }).catch(function(err){
    res.status(500).send(err)
    console.log(err)
  })
}

const findAllTransaction = function(req,res){
  Transactions.find().then(function(data_Transactions){
    res.status(200).send(data_Transactions)
    console.log('Show All Transactions')
  }).catch(function(err){
    res.status(500).send(err)
    console.log(err)
  })
}

const updateTransactions = function(req,res){
  // /:id // duedate - indate * 1000
  let id = {
    _id : ObjectId(req.params.id)
  }
  Transactions.findById(id).then(function(data_Transactions){
    //sum fine
    let dueDate = data_Transactions.due_date.getDate()
    let inDate = new Date().getDate()
    let sumFine = 1000 * (inDate - dueDate)
    
    if(dueDate > inDate){
      sumFine = 0
    }else{
      sumFine = sumFine
    }

    data_Transactions.in_date = new Date()
    data_Transactions.fine = sumFine
    data_Transactions.save().then(function(){
      res.status(200).send('1 Transaction Document Updated')
    })
     
  }).catch(function(err){
    res.status(200).send(err)
    console.log(err)
  })
}

const destroyTransaction = function(req,res){
  let id = {
    _id : ObjectId(req.params.id)
  }
  Transactions.findByIdAndRemove(id).then(function(){
    res.status(200).send('1 Transaction Deleted')
    console.log('1 Transaction Deleted')
  }).catch(function(err){
    res.status(200).send(err)
    console.log(err)
  })
}

module.exports = {
  findAllTransaction,
  createTransactions,
  updateTransactions,
  destroyTransaction
}