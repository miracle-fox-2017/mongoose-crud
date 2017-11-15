const Transaction = require('../models/transaction')


const getAll = (req, res) => {
	Transaction.find()
	.populate('booklist')
	.populate('member')
	.exec((err, hasil) => { 
		res.status(200).send(hasil) 
	})
	.catch(err => { res.status(500).send(err) })
}

const getById = (req, res) => {
	Transaction.findOne({_id:req.params.id})
	.then(hasil => { res.status(200).send(hasil)})
	.catch(err => { res.status(500).send(err) })
}

const create = (req, res) => {

	let out_date = new Date(),
		due_date = new Date(),
		fine = new Date(req.body.in_date)
		due_date.setDate(due_date.getDate() + (+req.body.days))

	let	obj = {
			member : req.body.member,
			days : req.body.days,
			booklist : req.body.booklist,
			fine : req.body.fine,
			out_date : out_date,
			due_date : due_date,
			in_date : req.body.in_date,
			fine : (fine.getDate() - due_date.getDate()) * 1000
		}

		// console.log(obj)

	Transaction.create(obj)
	.then(hasil =>{ res.status(201).send({msg:'created', book : hasil}) })
	.catch(err => { res.status(500).send(err) })
}

const destroy = (req, res) => {
	Transaction.deleteOne({_id : req.params.id})
	.then(hasil =>{ res.status(200).send({msg:'data has been deleted'}) })
	.catch(err => { res.status(500).send(err) })
}

const update = (req, res) => {
	Transaction.findOneAndUpdate({_id:req.params.id}, req.body)
	.then(hasil => { res.send({msg:'book has been updated', book:hasil}) })
	.catch(err => { res.status(500).send(err) })
}

module.exports = {
	getAll,
	create,
	destroy,
	update,
	getById
}