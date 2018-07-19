const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    member : {
    type: Schema.ObjectId,
    ref: "Customers"
  },
  days: Number,
  out_date: {
    type: Date,
    default: Date.now
  },
  due_date: {
    type: Date,
    default: Date.now
  },
  in_date: {
    type: Date
  },
  fine: Number,
  booklist : [
    {
      type: Schema.ObjectId,
      ref: "Books"
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transactions', transactionSchema);;
