const mongoose = require('mongoose').connect('mongodb://localhost/library');

let CustomerSchema = mongoose.Schema({
  name : String,
  memberid : String,
  address : String,
  zipcode : String,
  phone : {
    type : String,
    minlength : 6
  }
})

let customerModel = mongoose.model('Customer', CustomerSchema)

module.exports = customerModel;