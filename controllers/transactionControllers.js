const Transaction = require('../models/transactionModels');

let getAllTransaction = (req, res) => {
  Transaction.find().populate(['member', 'booklist']).then(dataTransaction => {
    res.send(dataTransaction);
  })
  .catch(err => {
    res.status(404).send(err);
  });
}

let addTransaction = (req, res) => {
  let member = req.body.member;
  let days = req.body.days;
  let now = new Date(Date.now());
  now.setDate(now.getDate() + +days);
  let out_date = Date.now();
  let due_date = now;
  let booklist = req.body.booklist;
  Transaction.create({
    member: member,
    days: days,
    out_date: out_date,
    due_date: due_date,
    booklist: booklist
  })
  .then(data => {
    var obj = {
      message: 'Insert Success',
      data: data
    }
    res.send(obj);
  })
  .catch(err => {
    res.send(err);
  });
}

let editTransaction = (req, res) => {
  Transaction.findById(
    {
      _id: req.params.id
    }
  ).then(function (dataTransaction) {
    let date = new Date(dataTransaction.due_date);
    let in_date = new Date(req.body.in_date);
    let sumfine = 1000 * (in_date.getDate() - date.getDate());
    let fine = sumfine;
    if (sumfine < 0) {
      sumfine = 0
    }
    Transaction.update({ _id: req.params.id },
      {
        in_date: in_date,
        fine: fine
      })
      .then(dataTransaction => {
        res.send('Transaction has been updated');
      })
      .catch(err => {
        console.log(err)
        res.send(err);
      });
    }).catch(err1 => {
      console.log(err1)
      res.send(err1)
    })
  }

  let deleteById = (req, res) => {
    Transaction.remove({ _id: req.params.id }).then(dataTransaction => {
      res.send('transaction has been deleted');
    })
    .catch(err => {
      res.send(err);
    });
  }

  module.exports = {
    getAllTransaction,
    addTransaction,
    editTransaction,
    deleteById
  };
