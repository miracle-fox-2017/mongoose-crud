const mongoose = require('mongoose');
const Customer = require('../models/customerModel')
const Book = require('../models/bookModel')
const Transaction = require('../models/transactionModel')

const findTransactions = (req, res) => {
    Transaction.find()
        .populate('booklist')
        .populate('member')
        .then((dataTransactions) => {
            res.send(dataTransactions)
        })
        .catch((reason) => {
            res.send(reason)
        })
}

const findTransactionById = (req, res) => {
    Transaction.findById(req.params.id)
        .then((dataTransaction) => {
            res.send(dataTransaction)
        })
        .catch((reason) => {
            res.send(reason)
        })
}

const updateTransactionById = (req, res) => {
    let due_date = new Date()
    Transaction.findById(req.params.id).then((transaction) => {
        transaction.days = Number(req.body.days)
        transaction.in_date = new Date(req.body.in_date)
        transaction.due_date = due_date.setDate(transaction.out_date.getDate() + Number(req.body.days))

        if ((transaction.in_date.getTime() - (transaction.due_date.getTime() + transaction.days)) > 0) {
            let differentTime = Math.abs((transaction.in_date.getTime() - (transaction.due_date.getTime() + transaction.days)))
            denda = Math.ceil(differentTime / (1000 * 3600 * 24)) * 5000
        } else {
            denda = 0
        }
        transaction.fine = denda

        transaction.save()
            .then(() => {
                res.send("1 document successfully updated")
            })
            .catch((reason) => {
                res.send(reason)
            })
    })
}

const insertIntoTransaction = (req, res) => {

    let days = 5
    let today = new Date()
    let in_date = new Date(req.body.in_date)
    let due_date = new Date()
    due_date.setDate(today.getDate() + 5)

    let denda
    if ((in_date.getTime() - (today.getTime() + days)) > 0) {
        let differentTime = Math.abs((in_date.getTime() - (today.getTime() + days)))
        denda = Math.ceil(differentTime / (1000 * 3600 * 24)) * 5000
    } else {
        denda = 0
    }

    Transaction.create({
        member: req.body.member,
        days: days,
        out_date: new Date(),
        due_date: due_date,
        in_date: in_date,
        fine: denda,
        booklist: req.body.booklist
    })
        .then(() => {
            res.send("1 transaction inserted!")
        })
        .catch((reason) => {
            res.status(500).send(reason)
        })
}


module.exports = {
    insertIntoTransaction,
    findTransactions,
    findTransactionById,
    updateTransactionById
}