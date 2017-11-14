var express = require('express');
var router = express.Router();
const transactionController = require('../controllers/transactionController')
/* GET users listing. */
router.get('/', transactionController.findTransactions);
router.get('/:id', transactionController.findTransactionById)
// router.put('/:id')
router.post('/', transactionController.insertIntoTransaction)

module.exports = router;
