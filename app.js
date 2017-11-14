const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const books = require('./routers/books')
const customers = require('./routers/customers')
const transaction = require('./routers/transaction');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', books)
app.use('/api', customers)
app.use('/api', transaction)

app.listen(3000)
