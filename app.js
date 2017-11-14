const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose');
const app = express()

app.use(morgan('dev'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// mongoose connect
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongooseCRUD')
.then(() =>  console.log('db connection succesful'))
.catch((err) => console.error(err));

//router
const books = require('./routes/books')
const customers = require('./routes/customers')
const transactions = require('./routes/transactions')

app.use('/api/books', books)
app.use('/api/customers', customers)
app.use('/api/transactions', transactions)

app.listen(3000, function(err){
  if(err){
    res.status(500).send('internal server error')
    console.log(err)
  }
})