const mongoClient=require("mongodb").MongoClient;
const ObjectId=require('mongodb').ObjectID;

// Import Model
const Transaction=require("../models/transactionModel");

const getAll=(req,res,next)=>{
    Transaction.find().populate("member").populate("booklist").then((books)=>{
        res.send(books);
    }).catch((err)=>{
        res.send(err);
    });
}

const add=(req,res,next)=>{
    const transaction=new Transaction(req.body);
    transaction.save().then((respond)=>{
        res.send(respond)
    }).catch((err)=>{
        res.send(err);
    });
}

module.exports={
    getAll,
    add
};
