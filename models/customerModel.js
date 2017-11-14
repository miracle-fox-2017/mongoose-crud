const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/library');
const Schema   = mongoose.Schema

var customerSchema = new Schema({
	name : String,
	memberid : String,
	address  : String,
	zipcode  : String,
	phone    : {
		type : String,
		minlength : 6
	},
	createdAt: Date,
	updatedAt: Date
})

var Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer