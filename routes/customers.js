var express = require('express');
var router = express.Router();
const Customer = require('../controllers/customerControllers');

/* GET users listing. */
router.get('/', Customer.getAllCustomer);
router.post('/', Customer.addCustomer);
router.put('/:id', Customer.editCustomer);
router.delete('/:id', Customer.deleteById);
router.get('/:id', Customer.getById);

module.exports = router;
