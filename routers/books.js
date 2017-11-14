const router = require('express').Router()

//require controller
const booksController = require('../controllers/booksController');

router.get('/', booksController.getAll)

router.post('/', booksController.create)

router.put('/:id', booksController.update)

router.delete('/:id', booksController.deleteBook)

module.exports = router