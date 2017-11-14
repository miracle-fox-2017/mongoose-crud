const router = require('express').Router()
const controller = require('../controller/book')

router.get('/', controller.findAll)
router.post('/', controller.create)
router.delete('/:bookId', controller.destroy)
router.put('/:bookId', controller.update)



module.exports = router