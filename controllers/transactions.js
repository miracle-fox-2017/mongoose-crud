const Transaction = require('../models/transactions')

let createData = function(req,res){
  Transaction.create({
    member : req.body.member,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date : req.body.in_date,
    fine : req.body.fine,
    booklist: req.body.booklist
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
  Transaction.find({},function(err,result){
    if (!err) {
      res.send(result)
    }
    else {
      res.send(err)
    }
  })
}

let deleteData = function(req,res){
  Transaction.findByIdAndRemove(
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
  Transaction.updateOne(req.params.id),
  {
    member : req.body.member,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date : req.body.in_date,
    fine : req.body.fine,
    booklist: req.body.booklist
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
