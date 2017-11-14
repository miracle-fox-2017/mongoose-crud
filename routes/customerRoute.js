const router = require('express').Router();
const customerController = require('../controllers/customerController');

router.get('/', customerController.findCustomer);
router.post('/', customerController.createCustomer);
router.put('/:customerId', customerController.updateCustomer);
router.delete('/:customerId', customerController.deleteCustomer);

module.exports = router;