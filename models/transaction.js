const url = 'mongodb://localhost:27017/perpustakaan';
const mongoose = require('mongoose').connect(url);
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
	name: String,
	title:  String,
	author:   String,
	category: String,
	stock: Number,
	createdAt: { type: Date, default: Date.now }
});

const TransactionModel = mongoose.model('Transaction', transactionSchema);
module.exports = TransactionModel;