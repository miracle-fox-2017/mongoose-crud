const url = 'mongodb://localhost:27017/perpustakaan';
const mongoose = require('mongoose').connect(url);
const Schema = mongoose.Schema;
const minInputLength = function(minLength) {
  minLength = minLength || 6;
  return {
    validator : function(value) {
      return value.toString().length >= minLength;
    },
    message : 'Phone number Length too short or too long'
  }
}

const customerSchema = new Schema({
	name: String,
	memberid:  String,
	address:   String,
	zipcode: String,
	phone: {
		type: Number,
		validate: minInputLength(6)
	},
});

const CustomerModel = mongoose.model('Customer', customerSchema);
module.exports = CustomerModel;