const mongoose = require('mongoose').connect('mongodb://localhost/library');
const Schema = mongoose.Schema

const moment = require('moment');
moment().format();

let transactionSchema = mongoose.Schema({
  member : {
    type : Schema.Types.ObjectId,
    ref : 'Customer'
  },
  days     : Number,
  out_date : {
    type : Date,
    default : Date.now
  },
  due_date : Date,
  in_date  : Date,
  fine     : Number,
  booklist : [{
    type : Schema.Types.ObjectId,
    ref : 'Book'
  }]
})

transactionSchema.pre('save', function (next) {
  this.due_date = moment(this.out_date).add(this.days, 'days')
  next()
})

let transactionModel = mongoose.model('Transaction', transactionSchema)

module.exports = transactionModel;