const mongoose=require("mongoose").connect("mongodb://127.0.0.1:27017/bookstore");
const Schema=mongoose.Schema;

const transactionSchema=({
    member: {
        type: Schema.Types.ObjectId,
        ref:"Customer"
    },
    days: Number,
    out_date: Date,
    due_date: Date,
    in_date: Date,
    fine: Number,
    booklist: [{
        type: Schema.Types.ObjectId,
        ref:"Book"
    }]
});
const Transaction=mongoose.model("Transaction",transactionSchema);

module.exports=Transaction;
