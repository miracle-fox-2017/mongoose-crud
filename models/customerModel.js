const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');
const Schema = mongoose.Schema;
var minlength = [6, 'Phone number should be more than 6 digits'];
const customerSchema = new Schema({
    name: String,
    memberid: String,
    address: String,
    zipcode: Number,
    phone: {
        type: String,
        minlength: minlength
    }

})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer