const ObjectId   = require('mongodb').ObjectId
const Customers  = require('../models/customerModels')

const createCustomer = function(req,res){
  let newCustomer = Customers({
    name : req.body.name,
    memberid : req.body.memberid,
    address : req.body.address,
    zipcode : req.body.zipcode,
    phone : req.body.phone
  })
  newCustomer.save().then(function(){
    res.status(200).send('1 Customer Created')
  }).catch(function(err){
    res.status(500).send(err.errors.phone.message)
    console.log(err)
  })
}

const findAllCustomers = function(req,res){
  Customers.find().then(function(data_Customers){
    res.status(200).send(data_Customers)
    console.log('show all data Customer info')
  }).catch(function(err){
    res.status(500).send(err)
    console.log(err)
  })
}

const editCustomers = function(req,res){
  let id = {
    _id : ObjectId(req.params.id)
  }
  let updateCustomers = {
    name : req.body.name,
    memberid : req.body.memberid,
    address : req.body.address,
    zipcode : req.body.zipcode,
    phone : req.body.phone
  }
  Customers.findByIdAndUpdate(id,updateCustomers).then(function(){
    res.status(200).send('1 Customers document updated')
    console.log('1 Customers document updated')
  }).catch(function(err){
    res.status(500).send(err)
    console.log(err)
  })
}

const destroyCustomers = function(req,res){
  let id = {
    _id : ObjectId(req.params.id)
  }
  Customers.findByIdAndRemove(id).then(function(){
    res.status(200).send('1 Customers document deleted')
  }).catch(function(err){
    res.status(500).send(err)
    console.log('1 Customers document deleted')
  })
}

module.exports = {
  createCustomer,
  findAllCustomers,
  editCustomers,
  destroyCustomers
}