const router = require('express').Router()
const Transaction = require('../controllers/transactionController');


router.post('/', Transaction.create)
router.get('/', Transaction.findAll)
router.put('/:id', Transaction.updateTransaction)
router.delete('/:id', Transaction.removeTransaction)

module.exports = router;