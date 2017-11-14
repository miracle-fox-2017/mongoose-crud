const router = require('express').Router()
const Customer   = require('../controllers/customerController')

router.get('/', Customer.findAll)
router.post('/', Customer.createOne)
router.put('/:id', Customer.updateOne)
router.delete('/:id', Customer.deleteOne)

module.exports = router