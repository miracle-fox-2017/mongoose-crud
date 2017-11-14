const Transaction = require('../models/transaction-schema')

let message = ''

const getAllTransactions = (req, res) => {
  Transaction.find()
  .populate('member')
  .populate('booklist')
  .exec((error, transactions) => {
    if (!error) {
      res.status(200).send({transactions:transactions})
    } else {
        res.status(500).send({error:error});
    }
  })
}


const create = (req, res) => {
  let transaction = new Transaction(
    {
      member   : req.body.member,
      days     : req.body.days,
      out_date : new Date(req.body.out_date).toISOString(),
      in_date  : null,
      fine     : null,
      booklist : req.body.booklist
    }
  )
  transaction.save()
  .then(dataTransaction => {
    message = 'save'
    res.status(200).send({dataTransaction:dataTransaction, msg:message})
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({err:err})
  })
}

const findOne = (req, res) => {
  Transaction.find({_id : req.params.id})
  .populate('member')
  .populate('booklist')
  .exec((err, transaction) => {
    if (!err) {
      res.status(200).send({transaction:transaction})
    } else {
      res.status(500).send({error:err})
    }
  })
}

const update = (req, res) => {
  Transaction.findById({_id : req.params.id}, function(err, dataTransaction) {
    if (!err) {
      let inDate = new Date(req.body.in_date)
      let dueDate = new Date(dataTransaction.due_date)
      dataTransaction.in_date  = inDate
      dataTransaction.fine     = ((inDate.getDate() - dueDate.getDate()) * 1000)

      dataTransaction.save((err, transactionSaved) => {
        if (!err) {
          res.status(200).send(transactionSaved)
        } else {
          res.status(500).send({transactionSaved:transactionSaved})
        }
      })
    } else  {
      res.send({err:err})
    }
  })
}

const findByIdAndRemove = (req, res) => {
  Transaction.findByIdAndRemove({_id : req.params.id})
  .then(transactionDel => {
    message = 'succes removing one data'
    console.log(transactionDel);
    res.status(200).send({transactionDel:transactionDel, msg:message})
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({err:err})
  })
}






module.exports = {
  getAllTransactions,
  create,
  findOne,
  update,
  findByIdAndRemove
};
