const router = require('express').Router();
const transactionController = require('../controllers/transactionController');

router.get('/', transactionController.findTransaction);
router.post('/', transactionController.createTransaction);
router.put('/:transactionId', transactionController.updateTransaction);

router.delete('/:transactionId', transactionController.deleteTransaction);

module.exports = router;