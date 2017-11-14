const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const customerSchema = new Schema({
  name : String,
  memberid : String,
  address : String,
  zipcode : String,
  phone : {
    type : String,
    validate : {
      validator : function(v){
        return /^.{6,}$/.test(v)
      },
      message : '{VALUE} is not a valid phone number!\n Min 6 digit number'
    },
    required : [true, 'User phone number required']
  },
  create_at : {
    type : Date,
    default : Date.now
  }
})

const customerModels = mongoose.model('Customer', customerSchema)

module.exports = customerModels