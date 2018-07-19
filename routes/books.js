const express = require('express')
const router = express.Router()
const Book =  require('../controllers/bookControllers')

/* GET Books listing. */
router.get('/',  Book.getAllBooks);
router.post('/', Book.createBook);
router.delete('/:id', Book.deleteBook);
router.put('/:id',  Book.updateBook);

module.exports = router
