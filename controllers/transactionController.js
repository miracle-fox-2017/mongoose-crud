const transactionModel = require('../models/transactionModel')

const findAll = (req, res) => {
  transactionModel.find().populate('booklist').populate('member').exec((err, hasil) => {
    res.send(hasil)
  })
}

const createOne = (req, res) => {

  var duedate = new Date();
  var hari = 6;
  duedate.setDate(duedate.getDate() + hari)

  transactionModel.create({
    member: req.body.member,
    days: 6,
    out_date: new Date(),
    due_date: duedate,
    booklist: req.body.booklist
  }).then(() => {
    res.send('1 document telah dibuat')
  }).catch((err) => {
    res.send(err)
  })
}

const editOne = (req, res) => {
  transactionModel.findOne({_id: req.params.id}).then((hasil) => {
    hasil.in_date = new Date(2017, 11, 21)

    if(hasil.in_date.getTime() > hasil.due_date.getTime()) {
      hasil.fine = (hasil.in_date.getDate() - hasil.due_date.getDate()) * 1000
    }
    else {
      hasil.fine = 0
    }

    hasil.save().then(() => {
      res.send('berhasil')
    })
  })
}

module.exports = {
  findAll,
  createOne,
  editOne
};
