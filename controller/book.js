const ObjectId = require('mongodb').ObjectId;
const Book = require('../models/book')


function create(req,res) {
	let book = new Book(req.body);
	book.save((err, book) => {
		if(err){
			res.send(err)
		}else{
			res.send(book);
		}
	})
}

function findAll(req,res) {
	Book.find((err, allBook) => {
		if(err){
			res.send(err);
		}else{
			res.send(allBook)
		}
	})
}

function destroy(req,res) {
	Book.remove({_id : ObjectId(req.params.bookId)}, (err,rmvBook) => {
		if(err){
			res.send(err);
		}else{
			res.send(rmvBook)
		}
	})
}

function update(req,res) {
	Book.findOneAndUpdate(
		{_id : ObjectId(req.params.bookId)},
		req.body,
		function (err,updatedBook){
			if(err){
				res.send(err);
			}else{
				res.send(updatedBook);
			}
		})
}

module.exports = {
	create,
	findAll,
	destroy,
	update
}