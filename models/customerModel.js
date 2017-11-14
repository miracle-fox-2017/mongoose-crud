const mongoose = require('mongoose').connect('mongodb://localhost:27017/booksstore')

const customerSchema = mongoose.Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: {
    type: String,
    validate: function (v){
      return (v.length>6)
    }
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const customerModel = mongoose.model('Customer', customerSchema)

module.exports = customerModel;