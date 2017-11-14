const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/library2')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let books = require('./routes/books')
let customer = require('./routes/customers')
let transaction = require('./routes/transactions')

app.use('/',books)
app.use('/customer',customer)
app.use('/transaction',transaction)

app.listen(8080,()=>{
  console.log(`8080`);
});
