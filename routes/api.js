const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books')

router.get('/books', booksController.findAll);
router.post('/books', booksController.create);
router.put('/books/:id', booksController.update);
router.delete('/books/:id', booksController.destroy);

module.exports = router;
