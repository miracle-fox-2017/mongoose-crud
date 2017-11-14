const express = require('express')
const Transactions = require('../controllers/transactionsControllers')
const router = express.Router()

router.get('/', Transactions.findAllTransaction)
router.post('/', Transactions.createTransactions)
router.put('/:id', Transactions.updateTransactions)
router.delete('/:id', Transactions.destroyTransaction)

module.exports = router