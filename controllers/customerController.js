const mongoose = require('mongoose');
const Customer = require('../models/customerModel')
//const ObjectId = mongoose.Types.ObjectId

const findAllDataCustomers = (req, res) => {
    Customer.find()
        .then((dataCustomers) => {
            res.send(dataCustomers)
        })
        .catch((reason) => {
            res.status(500).send(reason)
        })
    // .exec(function (err, dataBooks) {
    //     if (err) {
    //         res.status(500).send(err)
    //     } else {
    //         res.send(dataBooks)
    //     }
    // })
}

const findDataCustomerById = (req, res) => {
    Customer.findById(req.params.id)
        .then((dataCustomer) => {
            res.send(dataCustomer)
        })
        .catch((reason) => {
            res.status(500).send(reason)
        })
}

const updateDataCustomerById = (req, res) => {
    Customer.update({ _id: req.params.id }, {
        name: req.body.name,
        memberid: req.body.memberid,
        address: req.body.address,
        zipcode: req.body.zipcode,
        phone: req.body.phone
    })
        .then(() => {
            res.send("1 document successfully updated!")
        })
        .catch((reason) => {
            res.status(500).send(reason.errors.phone.message)
        })

}

const deleteDataById = (req, res) => {
    Customer.remove({ _id: req.params.id })
        .then(() => {
            res.send("1 document successfully deleted")
        })
        .catch((reason) => {
            res.status(500).send(reason)
        })
}

const insertIntoCustomer = (req, res) => {
    Customer.create({
        name: req.body.name,
        memberid: req.body.memberid,
        address: req.body.address,
        zipcode: req.body.zipcode,
        phone: req.body.phone
    })
        .then(() => {
            res.send("1 document successfully inserted")
        })
        .catch((reason) => {
            //console.log("Halooo", reason)
            res.status(500).send(reason.errors.phone.message)
        })
}

module.exports = {
    findAllDataCustomers,
    findDataCustomerById,
    updateDataCustomerById,
    deleteDataById,
    insertIntoCustomer
}