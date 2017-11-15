const mongoose=require("mongoose").connect("mongodb://127.0.0.1:27017/bookstore");
const Schema=mongoose.Schema;

const bookSchema=new Schema({
    isbn: String,
    title: String,
    author: String,
    category: String,
    stock: Number,
    createdAt:{
        type: Date,
        default: Date.now()
    }
});
const Book=mongoose.model("Book",bookSchema);

module.exports=Book;
