const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/library')

var customerSchema = mongoose.Schema({
  name:  String,
  memberId: String,
  address: String,
  zipcode: String,
  phone: {
    type: String,
    // validate: {
      // validator: function(v) {
        // return /\d{3}-\d{3}-\d{4}/.test(v);
      // },
      // message: '{VALUE} is not a valid phone number!'
    // }
  }
});

const customerModel = mongoose.model('Customer', customerSchema);

module.exports = customerModel;
