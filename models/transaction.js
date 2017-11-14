const mongoose = require('mongoose').connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;


const transactionSchema = new Schema({
	member : {
		type: Schema.Types.ObjectId, ref: 'customer'	
	},
	days : Number,
	out_date : {
		type : Date,
		default : Date.now
	},
	due_date : {
		type : Date,
		default : Date.now
	},
	in_date  : {
		type : Date,
		default : null
	},
	fine : {
		type : Number,
		default : 0	
	},
	booklist : [{
		type: Schema.Types.ObjectId, ref: 'book'
	}]
})

const transactionModel = mongoose.model('transaction',transactionSchema);

module.exports = transactionModel