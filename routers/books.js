const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController')

router.get('/books', bookController.findAll)
router.get('/books/:id', bookController.findById)
router.post('/books', bookController.insertOne)
router.delete('/books/:id', bookController.deleteOne)
router.put('/books/:id', bookController.editOne)

module.exports = router;
