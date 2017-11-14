const router = require('express').Router();
const TransactionController =  require('../controllers/transactions')

router.get('/transactions', TransactionController.getAll)
router.get('/transactions/:id', TransactionController.getById)
router.post('/transactions', TransactionController.create)
router.delete('/transactions/:id', TransactionController.destroy)
router.put('/transactions/:id', TransactionController.update)

module.exports = router