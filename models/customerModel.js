const mongoose=require("mongoose").connect("mongodb://127.0.0.1:27017/bookstore");
const Schema=mongoose.Schema;

const customerSchema=new Schema({
    name: String,
    memberId: String,
    address: String,
    zipcode: Number,
    phone:{
        type: Number,
        validate:{
            validator:function(value){
                return value.length > 5;
            },
            message:"Your phone number length less than 6 characters!"
        }
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
});
const Customer=mongoose.model("Customer",customerSchema);

module.exports=Customer;
