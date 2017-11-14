const router = require('express').Router()
const booksController = require('../controllers/books')

// books route
router.get('/', booksController.findAll)
router.post('/', booksController.create)
router.put('/:id', booksController.update)
router.delete('/:id', booksController.remove)

module.exports = router;
