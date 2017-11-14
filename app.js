const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//router
const index = require('./routes/index')
app.use('/', index)

app.listen(3000, function(err){
  if(err){
    res.status(500).send('internal server error')
    console.log(err)
  }
})