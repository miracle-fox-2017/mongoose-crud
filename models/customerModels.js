var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');
var Schema = mongoose.Schema;

// create a schema
var customerSchema = new Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: { type: String, minlength: [6, 'is not a valid phone number!'] },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var customerModels = mongoose.model('customers', customerSchema);

// make this available to our users in our Node applications
module.exports = customerModels;
