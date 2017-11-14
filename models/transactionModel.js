const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/library')

const transactionSchema = new Schema({
  member: {
    type: Schema.Types.ObjectId,
    ref: 'customers'
  },
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'books'
  }]
})

const transactionModel = mongoose.model('transactions', transactionSchema)

module.exports = transactionModel;
