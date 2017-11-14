const TransactionModel = require('../models/transaction');
const ObjectId = require('mongodb').ObjectID;

const findTransaction = (req, res) => {
	TransactionModel.find((err, transaction) => {
		if (err) {
			res.status(500).send({message: err.message});
		}

		res.status(200).send(transaction);
	});
}

const createTransaction = (req, res) => {
	let dueDate = new Date(req.body.out_date);
	dueDate.setDate(dueDate.getDate() + +req.body.days)

	let transaction = new TransactionModel({
		member: req.body.member,
		days:  +req.body.days,	
		out_date: req.body.out_date,
		due_date: dueDate,
		in_date: req.body.in_date,
		fine: req.body.fine,
		booklist: req.body.booklist
	});

	transaction.save((err, createdTransaction) => {  
		if (err) {
			res.status(500).send({message: err.message});
		} else {
			res.status(200).send({transaction: createdTransaction, message: 'Transaction Added'});
		}
  });
}

const updateTransaction = (req, res) => {
	TransactionModel.findById(req.params.transactionId, function(err, transaction) {
			if (err) {
				res.status(500).send({message: err.message});
			} else {
				transaction.booklist = req.body.booklist;

				transaction.save((err, transactionUpdated) => {
					if (err) {
						res.status(500).send({message: err.message});
					} else {
						res.status(200).send({transaction: transactionUpdated, message: 'Transaction Updated'});
					}
				})
			}
	})
}

const deleteTransaction = (req, res) => {
	TransactionModel.findByIdAndRemove(req.params.transactionId, (err, transaction) => {
		let response = {
			message : "Transaction deleted",
			transaction: transaction
		}

		if (err) {
			res.status(500).send({message: err.message});
		}

		 res.status(200).send(response); 
	})
}

module.exports = {
	findTransaction,
	createTransaction,
	updateTransaction,
	deleteTransaction
}