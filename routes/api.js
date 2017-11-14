const router = require('express').Router()
const booksController = require('../controllers/books')
const customersController = require('../controllers/customers')
const transactionsController = require('../controllers/transactions')

// books route
router.get('/books', booksController.findAll)
router.post('/books', booksController.create)
router.put('/books/:id', booksController.update)
router.delete('/books/:id', booksController.remove)

// transactions route
router.get('/transactions', transactionsController.findAll)
router.post('/transactions', transactionsController.create)
router.put('/transactions/:id', transactionsController.update)
// router.delete('/transactions/:id', transactionsController.remove)

// customers route
router.get('/customers', customersController.findAll)
router.post('/customers', customersController.create)
router.put('/customers/:id', customersController.update)
router.delete('/customers/:id', customersController.remove)

module.exports = router;
