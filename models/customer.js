const mongoose = require('mongoose').connect('mongodb://localhost/library')

const customerShema = mongoose.Schema({
	name : String,
	memberid: String,
	address:String,
	zipcode:String,
	phone:String,
	createdAt : {type: Date, default: Date.now},
	updatedAt : {type: Date, default: Date.now}
})

const Customer = mongoose.model('Customers', customerShema)

module.exports = Customer