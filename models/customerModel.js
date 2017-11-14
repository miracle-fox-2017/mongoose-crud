const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/library')

const customerSchema = new Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: {
    type: String,
    minlength: [6, 'phone kurang digit']
  }
})

const customerModel = mongoose.model('customers', customerSchema)

module.exports = customerModel;
