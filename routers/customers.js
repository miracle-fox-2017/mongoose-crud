const router = require('express').Router()

//require controller
const customersController = require('../controllers/customersController');

router.get('/', customersController.getAll)

router.post('/', customersController.create)

router.put('/:id', customersController.update)

router.delete('/:id', customersController.deleteCustomer)

module.exports = router