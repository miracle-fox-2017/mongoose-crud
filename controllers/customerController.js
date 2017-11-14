const CustomerModel = require('../models/customer');
const ObjectId = require('mongodb').ObjectID;

const findCustomer = (req, res) => {
	CustomerModel.find((err, customer) => {
		if (err) {
			res.status(500).send({message: err.message});
		}

		res.status(200).send(customer);
	});
}

const createCustomer = (req, res) => {
	let customer = new CustomerModel({
    name: req.body.name,
    memberid:  req.body.memberid,
    address:   req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
	});

	customer.save((err, createdCustomer) => {  
		if (err) {
			res.status(500).send({message: err.message});
		} else {
			res.status(200).send({customer: createdCustomer, message: 'Customer Added'});
		}
    
  });
}

const updateCustomer = (req, res) => {
	CustomerModel.findOne(
		{
			_id : ObjectId(req.params.customerId)
		}, (err, customer) => {
			if (err) {
				res.status(500).send({message: err.message});
			}

			if (customer) {
				let customerUpdate = new CustomerModel({
					name: req.body.name || customer.name,
					memberid:  req.body.memberid || customer.memberid,
					address:   req.body.address || customer.address,
					zipcode: req.body.zipcode || customer.zipcode,
					phone: req.body.phone || customer.phone 
				});

				customerUpdate.save((err, updatedCustomer) => {  
					if (err) {
						res.status(500).send({message: err.message});
					}

					res.status(200).send({customer: updatedCustomer, message: 'Customer Updated'});
				});
			} else {
				res.status(500).send({message: err.message});
			}
	})

}

const deleteCustomer = (req, res) => {
	CustomerModel.findByIdAndRemove(req.params.customerId, (err, customer) => {
		let response = {
			message : "Customer deleted",
			customer: customer
		}

		if (err) {
			res.status(500).send({message: err.message});
		}

		 res.status(200).send(response); 
	})
}

module.exports = {
	findCustomer,
	createCustomer,
	updateCustomer,
	deleteCustomer
}