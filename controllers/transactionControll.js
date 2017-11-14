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

const remove=(req,res,next)=>{
    const query={
        "_id":ObjectId(req.params.id)
    }
    Transaction.deleteOne(query,(err,respond)=>{
        if(err){
            res.send(err);
        }else{
            res.send(respond);
        }
    });
}

const addBooklist=(req,res,next)=>{
    const query={
        "_id":ObjectId(req.body.transaction_id)
    }
    Transaction.findOne(query,function(err,value){
        let booklist=value.booklist;
        booklist.push(req.body.book_id);
        Transaction.updateOne(query,{booklist:booklist},(err,respond)=>{
            if(err){
                res.send(err);
            }else{
                res.send(respond);
            }
        });
    });
}

module.exports={
    getAll,
    add,
    remove,
    addBooklist
};
