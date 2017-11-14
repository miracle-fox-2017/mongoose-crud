const Transaction = require('../models/transactionModel')
const fineCount = require('../helpers/fineCount')

let findAll = (req, res) => {
  Transaction.find()
  .populate('booklist')
  .exec()
  .then(trans => res.send(trans))
  .catch(err => res.status(500).send(err))
}

let create = (req, res) => {
  let transaction = new Transaction({
    member : req.body.member,
    days : req.body.days,
    out_date : new Date(),
    in_date : new Date(req.body.in_date),
    booklist : req.body.booklist
  })

  // set due_date
  let dueDate = new Date()
  dueDate.setDate(dueDate.getDate() + parseInt(transaction.days))
  transaction.due_date = dueDate

  // hitung denda
  transaction.fine = fineCount(transaction.in_date, transaction.due_date)

  transaction.save()
  .then(transaction => {
    res.send(transaction)
  })
  .catch(err => res.status(500).send(err))
}

let update = (req, res) => {
  // update days, in_date, booklist
  Transaction.findById(req.params.id)
  .then(transaction => {
    transaction.days = req.body.days
    transaction.due_date.setDate(transaction.out_date.getDate() + parseInt(req.body.days))
    transaction.in_date = new Date(req.body.in_date)
    if(typeof req.body.booklist == 'object'){
      // booklist tambah lebih dari satu
      req.body.booklist.forEach(booklist => {
        transaction.booklist.push(booklist)
      })
    }else{
      // booklist tambah satu
      transaction.booklist.push(req.body.booklist)
    }

    // hitung denda
    transaction.fine = fineCount(transaction.in_date, transaction.due_date)

    // save update data
    transaction.save()
    .then(updateCustomer => res.send(updateCustomer))
    .catch(err => res.status(500).send(err))
  })
}

module.exports = {
  findAll,
  create,
  update,
}
