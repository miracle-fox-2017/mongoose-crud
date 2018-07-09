const Customer = require('../models/customerModels');

let getAllCustomer = (req, res) => {
  Customer.find().then(dataCustomer => {
    res.send(dataCustomer);
  })
  .catch(err => {
    res.status(404).send(err);
  });
}

let addCustomer = (req, res) => {
  let name = req.body.name;
  let memberid = req.body.memberid;
  let address = req.body.address;
  let zipcode = req.body.zipcode;
  let phone = req.body.phone;
  Customer.create({
    name: name,
    memberid: memberid,
    address: address,
    zipcode: zipcode,
    phone: phone
  })
  .then(dataCustomer => {
    res.send(dataCustomer);
  })
  .catch(err => {
    res.send(err.errors.phone.message);
  });
}

let editCustomer = (req, res) => {
  let name = req.body.name;
  let memberid = req.body.memberid;
  let address = req.body.address;
  let zipcode = req.body.zipcode;
  let phone = req.body.phone;
  Customer.update({ _id: req.params.id },
    {
      name: name,
      memberid: memberid,
      address: address,
      zipcode: zipcode,
      phone: phone
    })
    .then(dataCustomer => {
      res.send('customer has been updated');
    })
    .catch(err => {
      res.send(err.errors.phone.message);
    });
  }

  let deleteById = (req, res) => {
    Customer.remove({ _id: req.params.id }).then(dataCustomer => {
      res.send('customer has been deleted');
    })
    .catch(err => {
      res.send(err);
    });
  }

  let getById = (req, res) => {
    Customer.findOne({ _id: req.params.id }).then(dataCustomer => {
      res.send(dataCustomer);
    })
    .catch(err => {
      res.send(err);
    });
  }

  module.exports = {
    getAllCustomer,
    addCustomer,
    editCustomer,
    deleteById,
    getById,
  };
