const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController')

router.get('/customers', customerController.findAll)
router.post('/customers', customerController.insertOne)
router.delete('/customers', customerController.deleteOne)
router.put('/customers/:id', customerController.editOne)

module.exports = router;
