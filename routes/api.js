const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books')
const customersController = require('../controllers/customers')
const transactionsController = require('../controllers/transactions')

router.get('/books', booksController.findAll);
router.post('/books', booksController.create);
router.put('/books/:id', booksController.update);
router.delete('/books/:id', booksController.destroy);

router.get('/customers', customersController.findAll);
router.post('/customers', customersController.create);
router.put('/customers/:id', customersController.update);
router.delete('/customers/:id', customersController.destroy);

router.get('/transactions', transactionsController.findAll);
router.post('/transactions', transactionsController.createOne);
router.put('/transactions/:id', transactionsController.update);
// router.delete('/transactions/:id', transactionsController.destroy);

module.exports = router;
