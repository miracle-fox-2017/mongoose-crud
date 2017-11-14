const mongoClient=require("mongodb").MongoClient;
const ObjectId=require('mongodb').ObjectID;

// Import model
const Book=require("../models/bookModel");

const getAll=(req,res,next)=>{
    Book.find().then((books)=>{
        res.send(books);
    }).catch((err)=>{
        res.send(err);
    });
}

const add=(req,res,next)=>{
    const book=new Book(req.body);
    book.save().then((respond)=>{
        res.send(respond)
    }).catch((err)=>{
        res.send(err);
    });
}

const edit=(req,res,next)=>{
    const query={
        "_id":ObjectId(req.params.id)
    }
    Book.updateOne(query,req.body,(err,respond)=>{
        if(err){
            res.send(err);
        }else{
            res.send(respond);
        }
    })
}

const remove=(req,res,next)=>{
    const query={
        "_id":ObjectId(req.params.id)
    }
    Book.deleteOne(query,(err,respond)=>{
        if(err){
            res.send(err);
        }else{
            res.send(respond);
        }
    });
}

module.exports={
    getAll,
    add,
    remove,
    edit
};
