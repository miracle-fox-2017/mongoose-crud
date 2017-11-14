const BookModel = require('../models/book');
const ObjectId = require('mongodb').ObjectID;

const findBook = (req, res) => {
	BookModel.find((err, book) => {
		if (err) {
			res.status(500).send({message: err.message});
		}

		res.status(200).send(book);
	});
}

const createBook = (req, res) => {
	let book = new BookModel({
		title: req.body.title,
    isbn:  req.body.isbn,
    author: req.body.author,
    category:  req.body.category,
    stock: req.body.stock,
	});

	book.save((err, createdBook) => {  
		if (err) {
			res.status(500).send({message: err.message});
		}
  
    res.status(200).send({book: createdBook, message: 'Book Added'});
  });
}

const updateBook = (req, res) => {
	BookModel.findOneAndUpdate(
		{ _id : ObjectId(req.params.bookId) }, 
		{
			title: req.body.title || book.title,
			isbn:  req.body.isbn || book.isbn,
			author: req.body.author || book.author,
			category:  req.body.category || book.category,
			stock: req.body.stock || book.stock,
		}, {upsert:true}, 
		function(err, book){
			if (err) {
				res.status(500).send({message: err.message});
			} else {
				res.status(200).send({book: book, message: 'Book Updated'});
			}
		}
	);
}

const deleteBook = (req, res) => {
	BookModel.findByIdAndRemove(req.params.bookId, (err, book) => {
		let response = {
			message : "Book deleted",
			book: book
		}

		if (err) {
			res.status(500).send({message: err.message});
		}

		 res.status(200).send(response); 
	})
}

module.exports = {
	findBook,
	createBook,
	updateBook,
	deleteBook
}