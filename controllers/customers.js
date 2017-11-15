const Customer = require('../models/customer')

const getAll = (req, res) => {
	Customer.find()
	.then(hasil => { res.status(200).send(hasil) })
	.catch(err => { res.status(500).send(err) })
}

const getById = (req, res) => {
	Customer.findOne({_id:req.params.id})
	.then(hasil => { res.status(200).send(hasil)})
	.catch(err => { res.status(500).send(err) })
}

const create = (req, res) => {
	Customer.create(req.body)
	.then(hasil =>{ res.status(201).send({msg:'created', book : hasil}) })
	.catch(err => { res.status(500).send(err) })
}

const destroy = (req, res) => {
	Customer.deleteOne({_id : req.params.id})
	.then(hasil =>{ res.status(200).send({msg:'data has been deleted'}) })
	.catch(err => { res.status(500).send(err) })
}

const update = (req, res) => {
	Customer.findOneAndUpdate({_id:req.params.id}, req.body)
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