const mongoose = require('mongoose').connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;


const bookSchema = new Schema({
	name : String,
	memberid : String,
	address : String,
	zipcode : Number,
	phone : {
		type : String,
		validate : {
			validator : function (v) {
				return v.length>6;
			},
			message : "phone number to short"
		}
	}
})

const bookModel = mongoose.model('customer',bookSchema);

module.exports = bookModel