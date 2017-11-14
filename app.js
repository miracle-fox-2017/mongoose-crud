const app = require('express')();
const bodyParser = require('body-parser')
const logger = require('morgan');
const index = require('./routes/index');
const books = require('./routes/books');
const customers = require('./routes/customers');
const transactions = require('./routes/transactions');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//route
app.use('/', index);
app.use('/books', books);
app.use('/customers', customers);
app.use('/transactions', transactions);

app.listen(3000,(err)=>{
  if(!err){
    console.log('Jalan di port 3000');
  } else {
    console.log(err);
  }
})
