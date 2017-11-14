const ObjectId = require('mongodb').ObjectId;
const Transaction = require('../models/transaction')
const checkDayDifference = require('../helper/checkday')


function findAll(req,res) {
	Transaction.find({}).populate('member').populate('booklist')
	.exec()	
	.then(allTransaction => {
		res.send(allTransaction);
	})
	.catch(err => {
		res.status(500).send(err);
	})
}

function makeTransaction(req,res) {
	let transaction = new Transaction({
		member : req.params.customerId,
		days : req.body.days,
		due_date : new Date(+new Date() + req.body.days*24*3600*1000),
		booklist : req.body.booklist
	})


	transaction.save((err, transaction) => {
		if(err){
			res.status(500).send(err)
		}else{
			res.send(transaction);
		}
	})
}

function updateBooklist(req,res) {
	Transaction.findById({
		_id : ObjectId(req.params.id)
	}, (err,transaction) => {
		let dayDifference = checkDayDifference(transaction.due_date);
		transaction.set({
			member : transaction.member,
			days : transaction.days,
			out_date : transaction.out_date,
			due_date : transaction.due_date,
			in_date : new Date(),
			fine : dayDifference * 1000,
			booklist : transaction.booklist
		});

		transaction.save((err, updatedTransaction) => {
			if(err){
				res.status(500).send(err);
			}else{
				res.send(updatedTransaction);
			}
		})
	})

}

module.exports = {
	findAll,
	makeTransaction,
	updateBooklist
}