const customerModel = require('../models/customerModel');

var findAll = (req, res) => {
  customerModel.find().then((hasil) => {
    res.send(hasil)
  })
}

var insertOne = (req, res) => {
  customerModel.create({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  }).then(() => {
    res.send('1 document telah dibuat')
  }).catch((err) => {
    res.send(err.errors.phone.message)
  })
}

var deleteOne = (req, res) => {
  bookModel.remove({id: req.params.id}).then(() => {
    res.send('1 document telah dihapus')
  })
}

var editOne = (req, res) => {
  customerModel.update({_id: req.params.id}, {
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  }).then(() => {
    res.send('1 document telah di edit')
  })
}

module.exports = {
  findAll,
  insertOne,
  deleteOne,
  editOne
};
