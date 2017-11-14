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
    const fine=2000;
    const currentDate=new Date();
    const transaction=new Transaction({
        member:req.body.member,
        days:req.body.days,
        out_date:new Date(),
        due_date:currentDate.setDate(currentDate.getDate() + 7),
        booklist:req.body.booklist.split(",")
    });
    transaction.save().then((respond)=>{
        res.send(respond)
    }).catch((err)=>{
        res.send(err);
    });
}

const returnBook=(req,res,next)=>{
    const query={
        "_id":ObjectId(req.body.transaction_id)
    }
    Transaction.findOne(query,(err,value)=>{
        if(value.in_date == null){
            const kembalikan=(denda)=>{
                Transaction.update(query,{
                    fine:denda,
                    in_date:new Date()
                }).then((respond)=>{
                    res.send(respond);
                }).catch((err)=>{
                    res.send(err);
                });
            }
            if(new Date() > value.due_date){
                const denda=Math.abs(new Date().getDate() - value.due_date.getDate()) * 2000;
                kembalikan(denda);
            }else{
                kembalikan(0);
            }
        }else{
            res.send({status:false,msg:"Buku sudah dikembalikan!"});
        }
    });
}

module.exports={
    getAll,
    add,
    returnBook
};
