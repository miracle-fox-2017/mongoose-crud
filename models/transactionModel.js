const mongoose = require('mongoose').connect('mongodb://localhost:27017/booksstore')

const transactionSchema = mongoose.Schema({
  member: String,
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [],
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const transactionModel = mongoose.model('Transaction', transactionSchema)

module.exports = transactionModel;