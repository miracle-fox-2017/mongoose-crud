const mongoClient=require("mongodb").MongoClient;
const ObjectId=require('mongodb').ObjectID;

// Import model
const Customer=require("../models/customerModel");

const getAll=(req,res,next)=>{
    Customer.find().then((customers)=>{
        res.send(customers);
    }).catch((err)=>{
        res.send(err);
    });
}

const add=(req,res,next)=>{
    const customer=new Customer(req.body);
    customer.save().then((respond)=>{
        res.send(respond)
    }).catch((err)=>{
        res.status(400).send(err);
    });
}

const edit=(req,res,next)=>{
    const query={
        "_id":ObjectId(req.params.id)
    }
    Customer.updateOne(query,req.body,(err,respond)=>{
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
    Customer.deleteOne(query,(err,respond)=>{
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
