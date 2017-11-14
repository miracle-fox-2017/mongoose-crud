var express = require('express');
var router = express.Router();
const Transaction = require('../controllers/transactionControllers');

/* GET users listing. */
router.get('/', Transaction.getAllTransaction);
router.post('/', Transaction.addTransaction);
router.put('/:id', Transaction.editTransaction);
router.delete('/:id', Transaction.deleteById);
module.exports = router;
