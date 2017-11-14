const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//connection to database
mongoose.connect('mongodb://localhost/mongooseCrud')
mongoose.Promise = global.Promise
mongoose.connection.once('open', function(){
  console.log('Connection has been made');
}).on('error', (error) => {
  console.log("connection error: ==================", error.message);
})


app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())




app.get('/', function(req, res){
  res.send('hello world');
});

const api = require('./routes/api')
app.use('/api', api )

app.listen(3000);
