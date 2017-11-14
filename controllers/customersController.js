//require model
const Customer = require('../models/customerModel')

//create
let create = (req, res) => {
  let customer = new Customer({
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
  })
  
  customer.save()
  .then(result=>{
    res.send(result)
  }).catch(err=>{
    res.status(406).send(err)
  })
}

//read
let getAll = (req, res) => {
  Customer.find()
  .then(result=>{
    res.send(result)
  }).catch(err=>{
    res.status(500).send(err)
  })
}

//update
let update = (req, res) => {
  let updated = {
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  }
  
  Customer.update({ _id: req.params.id }, updated)
  .then(result=>{
    res.send(result)
  }).catch(err=>{
    res.status(500).send(err)
  })
}

//delete
let deleteCustomer = (req, res) => {
  Customer.remove({ _id: req.params.id })
  .then(result=>{
    res.send(result)
  }).catch(err=>{
    res.status(500).send(err)
  })
}


module.exports = {
  getAll,
  create,
  update,
  deleteCustomer
};