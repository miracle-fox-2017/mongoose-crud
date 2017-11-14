const Book   = require('../models/bookModel')

const findAll = (req, res) => {
	Book.find()
	.then(books => {
		res.send(books)
	})
	.catch(err => {
		res.send(err)
	})
}

const createOne = (req, res) => {
	Book.create({
		isbn : req.body.isbn,
		title : req.body.title,
		author : req.body.author,
		category : req.body.category,
		stock : parseInt(req.body.stock),
		createdAt : new Date(),
		updatedAt : new Date()
	}, function(err, book) {
		if(err) throw err

		res.send(book)
	})
}

const updateOne = (req, res) => {
	Book.update({_id : req.params.id}, {
		isbn : req.body.isbn,
		title : req.body.title,
		author : req.body.author,
		category : req.body.category,
		stock : parseInt(req.body.stock),
		updatedAt : new Date()
	}, function(err, book) {
		if(err) throw err

		res.send(book)
	})
}

const deleteOne = (req, res) => {
	Book.deleteOne({_id : req.params.id}, function(err, book) {
		if(err) throw err

		res.send(book)
	})
}

module.exports = {
	findAll,
	createOne,
	updateOne,
	deleteOne
}