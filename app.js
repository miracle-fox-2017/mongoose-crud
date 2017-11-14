const app = require('express')();
const morgan = require('morgan')
const MongoClient = require('mongodb').MongoClient
const Book = require('./routers/book')
const Customer = require('./routers/customer')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const url = 'mongodb://localhost:27017/library';


app.use('/book', Book);
app.use('/customer', Customer);

app.use(morgan('dev'));

app.listen(3004)