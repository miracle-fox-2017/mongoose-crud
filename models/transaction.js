const url = 'mongodb://localhost:27017/perpustakaan';
const mongoose = require('mongoose').connect(url);
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
	member: Schema.Types.ObjectId,
	days:  Number,	
	out_date: { type: Date, default: Date.now },
	due_date: { type: Date, default: Date.now },
	in_date: { type: Date, default: null },
	fine: { type: Number, default: null },
	booklist: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Book'
		}
	],
});

const TransactionModel = mongoose.model('Transaction', transactionSchema);
module.exports = TransactionModel;