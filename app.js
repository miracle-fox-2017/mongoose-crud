const app = require('express')()
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const books = require('./routes/bookRoute')
const customers = require('./routes/customerRoute')
const transactions = require('./routes/transactionRoute')


app.use('/api/books', books)
app.use('/api/customers', customers)
app.use('/api/transactions', transactions)

app.listen(3000, () => {
	console.log('jalan guys');
})