const app = require('express')();
const bodyParser = require('body-parser');
const morgan     = require('morgan')
const Books = require('./routers/bookRouter');
const Transactions = require('./routers/transactionRouter');
const Customers = require('./routers/customerRouter');

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/books', Books)
app.use('/transactions', Transactions)
app.use('/customers', Customers)

app.get('/', function (req, res) {
  res.send('Hello World!');
})
app.listen(3000, function () {
  console.log('IT WORKS!');
})