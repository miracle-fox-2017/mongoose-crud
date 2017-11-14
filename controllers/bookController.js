const mongoose = require('mongoose');
const Book = require('../models/bookModel')
//const ObjectId = mongoose.Types.ObjectId

const findAllDataBooks = (req, res) => {
    Book.find()
        .then((dataBooks) => {
            res.send(dataBooks)
        })
        .catch((reason) => {
            res.status(500).send(reason)
        })
    // .exec(function (err, dataBooks) {
    //     if (err) {
    //         res.status(500).send(err)
    //     } else {
    //         res.send(dataBooks)
    //     }
    // })
}

const findDataBookById = (req, res) => {
    Book.findById(req.params.id)
        .then((dataBook) => {
            res.send(dataBook)
        })
        .catch((reason) => {
            res.status(500).send(reason)
        })
}

const updateDataBookById = (req, res) => {
    Book.update({ _id: req.params.id }, {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
    })
        .then(() => {
            res.send("1 document successfully updated!")
        })
        .catch((reason) => {
            res.status(500).send(reason)
        })
}

const deleteDataById = (req, res) => {
    Book.remove({ _id: req.params.id })
        .then(() => {
            res.send("1 document successfully deleted")
        })
        .catch((reason) => {
            res.status(500).send(reason)
        })
}

const insertIntoBooks = (req, res) => {
    Book.create({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
    })
        .then(() => {
            res.send("1 document successfully inserted")
        })
        .catch((reason) => {
            console.log("Halooo", reason)
            res.status(500).send(reason)
        })
}

module.exports = {
    findAllDataBooks,
    findDataBookById,
    updateDataBookById,
    deleteDataById,
    insertIntoBooks
}