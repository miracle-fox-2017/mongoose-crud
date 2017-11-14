const Customer = require('../models/customerModel');

const create = (req,res) => {
  let customer = new Customer({
    name : req.body.name,
    memberid : req.body.memberid,
    address : req.body.address,
    zipcode : req.body.zipcode,
    phone : req.body.phone
  })
  
  customer.save()
  .then(success => {
    res.send(success)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

const findAll = (req, res) => {
  Customer.find()
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

const updateCustomer = (req, res) => {
  Customer.update({
    _id : req.params.id
  },{
    name : req.body.name,
    memberid : req.body.memberid,
    address : req.body.address,
    zipcode : req.body.zipcode,
    phone : req.body.phone
  })
  .then(success => {
    res.send(success)
  })
  .catch(err => {
    res.status(401).send(err)
  })
}

const removeCustomer = (req, res) => {
  Customer.remove({
    _id : req.params.id
  })
  .then(success => {
    res.send(success)
  })
  .catch(err => {
    res.status(401).send(err)
  })
}

module.exports = {
  create,
  findAll,
  updateCustomer,
  removeCustomer
};