const router = require('express').Router();
const BookController =  require('../controllers/books')

router.get('/books', BookController.getAll)
router.get('/books/:id', BookController.getById)
router.post('/books', BookController.create)
router.delete('/books/:id', BookController.destroy)
router.put('/books/:id', BookController.update)

module.exports = router