const express = require('express')
const Customers = require('../controllers/customerControllers')
const router  = express.Router()

router.post('/', Customers.createCustomer)
router.get('/', Customers.findAllCustomers)
router.put('/:id', Customers.editCustomers)
router.delete('/:id', Customers.destroyCustomers)

module.exports = router