var express = require('express');
var router = express.Router();
const Book = require('../controllers/booksControllers');

/* GET users listing. */
router.get('/books', Book.getAllBook);
router.post('/books', Book.addBook);
router.put('/books/:id', Book.editBook);
router.delete('/books/:id', Book.deleteById);
router.get('/books/:id', Book.getById);

module.exports = router;
