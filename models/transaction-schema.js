const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var moment = require('moment');
moment().format();

const transactionSchema = mongoose.Schema  ({
  member    : { type: Schema.Types.ObjectId, ref: 'Costumer' },
  days      : Number,
  out_date  : {
    type    : Date,
    default : Date.now
  },
  due_date  : Date,
  in_date   : Date,
  fine      : Number || null,
  booklist  : [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }],
  createdAt : {
    type : Date,
    default : Date.now
  },
  updatedAt : {
    type : Date,
    default : Date.now
  }

})


transactionSchema.pre('save', function(next) {
  this.due_date = moment(this.out_date).add(this.days, 'days')
  next();
});



const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction;
