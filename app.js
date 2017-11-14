// const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = require('express') ();
const bookRouter = require('./routes/bookRoute');
const customerRouter = require('./routes/customerRoute');

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/books', bookRouter);
app.use('/customers', customerRouter);

app.listen(3000);