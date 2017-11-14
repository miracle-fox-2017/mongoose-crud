const router = require('express').Router()
const Transaction   = require('../controllers/transactionController')

router.get('/', Transaction.findAll)
router.post('/', Transaction.createOne)
router.put('/:id', Transaction.updateOne)
router.delete('/:id', Transaction.deleteOne)

module.exports = router