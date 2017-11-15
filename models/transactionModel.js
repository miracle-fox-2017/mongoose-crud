const mongoose = require('mongoose').connect('mongodb://localhost:27017/booksstore')
const Schema = mongoose.Schema

const transactionSchema = mongoose.Schema({
  member: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }],
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const transactionModel = mongoose.model('Transaction', transactionSchema)

module.exports = transactionModel;