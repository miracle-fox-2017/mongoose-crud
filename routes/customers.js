const router = require('express').Router()
const customersController = require('../controllers/customers')

// customers route
router.get('/', customersController.findAll)
router.post('/', customersController.create)
router.put('/:id', customersController.update)
router.delete('/:id', customersController.remove)

module.exports = router;
