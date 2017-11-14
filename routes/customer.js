var express = require('express');
var router = express.Router();
const customerController = require('../controllers/customerController')
/* GET users listing. */
router.get('/', customerController.findAllDataCustomers);
router.get('/:id', customerController.findDataCustomerById)
router.put('/:id', customerController.updateDataCustomerById)
router.delete('/:id', customerController.deleteDataById)
router.post('/', customerController.insertIntoCustomer)
module.exports = router;
