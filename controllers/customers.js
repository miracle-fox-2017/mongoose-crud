const Customer = require('../models/Customer')
const ObjectId = require('mongodb').ObjectId

let findAll = (req, res) => {
  Customer.find()
  .then(customers => res.send(customers))
  .catch(err => res.status(500).send(err))
}

let create = (req, res) => {
  let obj = {
    name:  req.body.name,
    memberId: req.body.memberId,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  }

  Customer.create(obj)
  .then(() => res.send('success create new document'))
  .catch(err => res.status(500).send(err))
}

let update = (req, res) => {
  let id = {_id: ObjectId(req.params.id)}

  Customer.findOne(id)
  .then(customer => {
    customer.name = req.body.name || customer.name,
    customer.memberId = req.body.memberId || customer.memberId,
    customer.address = req.body.address || customer.address,
    customer.zipcode = req.body.zipcode || customer.zipcode,
    customer.phone = req.body.phone || customer.phone

    customer.save()
    .then(customer => res.send(customer))
    .catch(err => res.status(500).send(err))
    // res.send('success update document')
  })
  .catch(err => res.status(500).send(err))
}

let destroy = (req, res) => {
  let id = {_id: ObjectId(req.params.id)}

  Customer.deleteOne(id)
  .then(() => res.send('success delete document'))
  .catch(err => res.status(500).send(err))
}

module.exports = {
  findAll,
  create,
  update,
  destroy
};
