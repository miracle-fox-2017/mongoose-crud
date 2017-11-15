const mongoose = require('mongoose').connect('mongodb://localhost/library');
const Schema = mongoose.Schema

const transactionShema = Schema({
	member : {type: Schema.Types.ObjectId, ref: 'Customers'},
	days : Number,
	out_date : {type: Date, default: Date.now},
	due_date : {type: Date, default: Date.now},
	in_date : {type: Date, default: Date.now},
	fine : Number,
	booklist : [{type: Schema.Types.ObjectId, ref: 'Books'}]
})

const Transaction = mongoose.model('Transactions', transactionShema)

module.exports = Transaction