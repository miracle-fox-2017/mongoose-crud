const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library', { useMongoClient: true });

var transactionSchema = mongoose.Schema({
    member: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer'
    },
    days: Number,
    out_date: Date,
    due_date: Date,
    in_date: Date,
    fine: Number,
    booklist: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book'
    }]
});

var transactionModel = mongoose.model('Transaction', transactionSchema);

module.exports = transactionModel;
