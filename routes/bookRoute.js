const router = require('express').Router()
const Book   = require('../controllers/bookController')

router.get('/', Book.findAll)
router.post('/', Book.createOne)
router.put('/:id', Book.updateOne)
router.delete('/:id', Book.deleteOne)

module.exports = router