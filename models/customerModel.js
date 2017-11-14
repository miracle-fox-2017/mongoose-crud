const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library', { useMongoClient: true });

var customerSchema = mongoose.Schema({
    name: String,
    memberid: String,
    address: String,
    zipcode: String,
    phone: {
      type: String,
      minlength: 6,
    }
});

var customerModel = mongoose.model('Customer', customerSchema);

module.exports = customerModel;
