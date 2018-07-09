var mongoose = require('mongoose');
var idvalidator = require('mongoose-id-validator');
mongoose.connect('mongodb://localhost/library');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

// create a schema
var transactionSchema = new Schema({
  member: {
    type: Schema.Types.ObjectId,
    ref: 'customers',
  },
  days: Number,
  out_date: { type: Date, default: Date.now },
  due_date: { type: Date },
  in_date: { type: Date },
  fine: Number,
  booklist: [
    {
      type: Schema.Types.ObjectId,
      ref: 'books',
    },
  ],
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var transactionModels = mongoose.model('transaction', transactionSchema);

// make this available to our users in our Node applications
module.exports = transactionModels;
