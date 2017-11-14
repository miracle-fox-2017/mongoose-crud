const mongoose = require('mongoose')
const Schema = mongoose.Schema


const costumerSchema = new Schema ({
  name      : String,
  memberid  : String,
  address   : String,
  zipcode   : String,
  phone     : {
    type: String,
    validate: {
      validator: function(v) {
        return v.length > 6
      },
      message: '{VALUE} is not a valid phone number!'
    },
    required: [true, 'User phone number required']
  },
  createdAt : {
    type : Date,
    default : Date.now
  },
  updatedAt : {
    type : Date,
    default : Date.now
  }
})


const Costumer = mongoose.model('Costumer', costumerSchema)

module.exports = Costumer;
