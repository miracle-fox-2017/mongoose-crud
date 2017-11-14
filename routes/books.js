const express = require('express')
const books   = require('../controllers/bookControllers')
const router  = express.Router()

router.post('/', books.createBook)
router.get('/', books.findBook)
router.put('/:id', books.editBook)
router.delete('/:id', books.destroyBook)

module.exports = router