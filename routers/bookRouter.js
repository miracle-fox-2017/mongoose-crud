const router = require('express').Router()
const Book = require('../controllers/bookController');

router.post('/', Book.create)
router.get('/', Book.findAll)
router.put('/:id', Book.updateBook)
router.delete('/:id', Book.removeBook)

module.exports = router;