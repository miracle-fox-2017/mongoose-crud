const Costumer = require('../models/costumers-schema')

let message = ''

const getAllCostumers = (req, res) => {
  Costumer.find().then(costumers => {
    res.send(costumers)
  })
  .catch(err => {
    res.status(500).send({err:err});
  })
}


const create = (req, res) => {
  console.log('masuk sini');
  Costumer.create(
    {
      name     : req.body.name,
      memberid : req.body.memberid,
      address  : req.body.address,
      zipcode  : req.body.zipcode,
      phone    : req.body.phone
    }
  ).then(costumer => {
    message = 'succes create one data'
    res.send({costumer:costumer, msg:message})
  })
  .catch(err => {
    res.status(500).send({err:err})
  })
}

const findOne = (req, res) => {
  Costumer.find({_id : req.params.id}).then(costumer => {
    res.send({costumer:costumer})
  })
  .catch(err => {
    res.status(500).send({err:err})
  })
}



const findByIdAndUpdate = (req, res) => {
  Costumer.findByIdAndUpdate({_id : req.params.id}, {
    name     : req.body.name,
    memberid : req.body.memberid,
    address  : req.body.address,
    zipcode  : req.body.zipcode,
    phone    : req.body.phone
  })
  .then(costumer => {
    message = 'succes adding one data'
    res.send({costumer:costumer,msg:message})
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({err:err})
  })
}

const findByIdAndRemove = (req, res) => {
  console.log('masuk sini remove');
  Costumer.findByIdAndRemove({_id : req.params.id})
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
  getAllCostumers,
  create,
  findOne,
  findByIdAndUpdate,
  findByIdAndRemove
};
