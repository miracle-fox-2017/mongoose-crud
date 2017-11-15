const router = require('express').Router();
const CustomerController =  require('../controllers/customers')

router.get('/customers', CustomerController.getAll)
router.get('/customers/:id', CustomerController.getById)
router.post('/customers', CustomerController.create)
router.delete('/customers/:id', CustomerController.destroy)
router.put('/customers/:id', CustomerController.update)

module.exports = router