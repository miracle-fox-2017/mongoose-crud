const app = require('express')();
const morgan = require('morgan')
const bodyParser = require('body-parser')

const books = require('./routers/books')
const transactions = require('./routers/transactions')
const customers = require('./routers/customers')

//use body parser
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

//use morgan
app.use(morgan('combined'))

//route /books
app.use('/api/books', books)

//route /transaction
app.use('/api/transactions', transactions)

//route /costumers
app.use('/api/customers', customers)

app.listen('3000', ()=>{
  console.log('running on 3000');
})