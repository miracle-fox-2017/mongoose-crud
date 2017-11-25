const express = require('express')
const router = express.Router()
const transactionController = require('../controllers/transactionController')

router.get('/transactions', transactionController.findAll)
router.post('/transactions', transactionController.createOne)
router.put('/transactions/:id', transactionController.editOne)

module.exports = router;
