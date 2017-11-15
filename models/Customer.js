const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/library')

var customerSchema = mongoose.Schema({
  name:  String,
  memberId: String,
  address: String,
  zipcode: String,
  phone: {
    type: String,
    minlength: 6
  }
});

const customerModel = mongoose.model('Customer', customerSchema);

module.exports = customerModel;
