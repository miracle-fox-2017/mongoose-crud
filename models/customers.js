const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var customers = new Schema({
  name : String,
  memberId: String,
  address: String,
  zipcode:Number,
  phone: Number
})

const Customer = mongoose.model('Customer',customers)
module.exports = Customer
