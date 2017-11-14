const router = require('express').Router()
const transactionsController = require('../controllers/transactions')

// transactions route
router.get('/', transactionsController.findAll)
router.post('/', transactionsController.create)
router.put('/:id', transactionsController.update)

module.exports = router;
