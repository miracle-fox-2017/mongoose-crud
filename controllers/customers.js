const Customer = require('../models/customers')

let createData = function(req,res){
  Customer.create({
    name : req.body.name,
    memberId: req.body.memberId,
    address : req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  },(err,result)=>{
    if(!err){
      res.send(result)
    }
    else {
      res.send(err)
    }
  })
}

let viewData = function(req,res){
  Customer.find({},function(err,result){
    if (!err) {
      res.send(result)
    }
    else {
      res.send(err)
    }
  })
}

let deleteData = function(req,res){
  Customer.findByIdAndRemove(
    req.params.id, (err,result)=>{
      if (!err) {
        res.send(result)
      }
      else {
        res.send(err)
      }
    }
  )
}

let editData = function(req,res){
  Customer.updateOne(req.params.id),
  {
    name : req.body.name,
    memberId: req.body.memberId,
    address : req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  },(err,result)=>{
    if(!err){
      res.send(result)
    }
    else {
      res.send(err)
    }
  }
}


module.exports = {
  createData,
  viewData,
  deleteData,
  editData
};
