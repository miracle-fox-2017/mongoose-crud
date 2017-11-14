const router = require('express').Router()
const Customer = require('../controllers/customerController');


router.post('/', Customer.create)
router.get('/', Customer.findAll)
router.put('/:id', Customer.updateCustomer)
router.delete('/:id', Customer.removeCustomer)

module.exports = router;