const Transaction = require('../models/transaction-schema')

let message = ''

const getAllTransactions = (req, res) => {
  Transaction.find()
  .populate('name')
  .exec((error, transactions) => {
    if (!error) {
      res.send({transactions:transactions})
    } else {
        res.status(500).send({error:error});
    }
  })
}


const create = (req, res) => {
  let transaction = new Transaction(
    {
      memberid : req.body.memberid,
      days     : req.body.days,
      out_date : req.body.out_date,
      in_date  : null,
      fine     : null,
      booklist : req.body.booklist
    }
  )
  transaction.save()
  .then(data => {
    message = 'save'
    res.send(data)
  }).catch(err => {
    console.log(err);
    res.status(500).send({err:err})
  })
}

const findOne = (req, res) => {
  Transaction.find({_id : req.params.id}).then(transactions => {
    res.send({transactions:transactions})
  })
  .catch(err => {
    res.status(500).send({err:err})
  })
}

const update = (req, res) => {
  console.log('masuk update');
  Transaction.findById({_id : req.params.id}, function(err, dataTransaction) {
    if (!err) {
      let inDate = new Date()
      let dueDate = new Date(dataTransaction.due_date)
      dataTransaction.in_date  = inDate
      dataTransaction.fine     = ((inDate.getDate() - dueDate.getDate()) * 1000)

      dataTransaction.save((err, transactionSaved) => {
        if (!err) {
          res.send(transactionSaved)
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
  console.log('masuk sini remove');
  Transaction.findByIdAndRemove({_id : req.params.id})
  .then(costumer => {
    message = 'succes removing one data'
    console.log(costumer);
    res.send({costumer:costumer, msg:message})
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
