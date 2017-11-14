const Customer = require('../models/customerModel')

let findAll = (req, res) => {
  Customer.find()
  .then(customers => res.send(customers))
  .catch(err => res.status(500).send(err))
}

let create = (req, res) => {
  customer = new Customer({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })

  customer.save()
  .then(customer => {
    res.send(customer)
  })
  .catch(err => res.status(500).send(err))
}

let update = (req, res) => {
  Customer.findById(req.params.id)
  .then(customer => {
    // replace data customer with new data customer
    customer.name = req.body.name || customer.name
    customer.memberid = req.body.memberid || customer.memberid
    customer.address = req.body.address || customer.address
    customer.zipcode = req.body.zipcode || customer.zipcode
    customer.phone = req.body.phone || customer.phone

    // save update data
    customer.save()
    .then(updateCustomer => res.send(updateCustomer))
    .catch(err => res.status(500).send(err))
  })
}

let remove = (req, res) => {
  Customer.findByIdAndRemove(req.params.id)
  .then(removeCustomer => res.send(removeCustomer))
  .catch(err => res.status(500).send(err))
}

module.exports = {
  findAll,
  create,
  update,
  remove
}
