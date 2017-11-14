const Transaction = require('../models/Transaction')
const ObjectId = require('mongodb').ObjectId

let findAll = (req, res) => {
  Transaction.find().populate('booklist')
  .then(transactions => res.send(transactions))
  .catch(err => res.status(500).send(err))
}

let createOne = (req, res) => {
  let today = new Date()
  let due_date = new Date(today.setDate(today.getDate() + parseInt(req.body.days)))
  let in_date = new Date(req.body.in_date)
  let fine = in_date.getDate() - due_date.getDate()
  console.log(in_date);
  console.log(due_date);
  console.log(fine);
  let obj = {
    member: req.body.member,
    days: req.body.days,
    out_date: new Date(), //tgl buku dipinjam
    due_date: due_date, //tgl buku harus dikembalikan
    in_date: in_date, //tgl customer mengembalikan buku
    fine: fine * req.body.fine, //denda
    booklist: req.body.book//daftar buku yg dipinjam
  }
  console.log(obj);
  Transaction.create(obj)
  .then(transactions => res.send(transactions))
  .catch(err => res.status(500).send(err))
}

let update = (req, res) => {
  let id = {_id: ObjectId(req.params.id)}

  Transaction.findOne(id)
  .then(transaction => {
    let in_date = new Date(req.body.in_date)
    let fine = in_date.getDate() - transaction.due_date.getDate()
    console.log(in_date);
    console.log(fine);
    transaction.days = req.body.days || transaction.days
    transaction.in_date = in_date || transaction.in_date
    transaction.fine = fine * req.body.fine || transaction.fine

    transaction.save()
    .then(transaction => res.send(transaction))
    .catch(err => res.status(500).send(err))
  })
  .catch(err => res.status(500).send(err))
}

module.exports = {
  findAll,
  createOne,
  update
};
