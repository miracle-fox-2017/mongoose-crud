const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books')
const customersController = require('../controllers/customers')

router.get('/books', booksController.findAll);
router.post('/books', booksController.create);
router.put('/books/:id', booksController.update);
router.delete('/books/:id', booksController.destroy);

router.get('/customers', customersController.findAll);
router.post('/customers', customersController.create);
router.put('/customers/:id', customersController.update);
router.delete('/customers/:id', customersController.destroy);

module.exports = router;
