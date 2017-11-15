const Books = require('../models/book')


const getAll = (req, res) => {
	Books.find()
	.then(hasil => { res.status(200).send(hasil) })
	.catch(err => { res.status(500).send(err) })
}

const getById = (req, res) => {
	Books.findOne({_id:req.params.id})
	.then(hasil => { res.status(200).send(hasil)})
	.catch(err => { res.status(500).send(err) })
}

const create = (req, res) => {
	Books.create(req.body)
	.then(hasil =>{ res.status(201).send({msg:'created', book : hasil}) })
	.catch(err => { res.status(500).send(err) })
}

const destroy = (req, res) => {
	Books.deleteOne({_id : req.params.id})
	.then(hasil =>{ res.status(200).send({msg:'data has been deleted'}) })
	.catch(err => { res.status(500).send(err) })
}

const update = (req, res) => {
	Books.findOneAndUpdate({_id:req.params.id}, req.body)
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