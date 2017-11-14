const express = require('express')
const router  = express.Router()
const bookController = require('../controller/books')
const costumerController = require('../controller/costumers')



// ====================== Books ===================== //
// get all data
router.get('/books', bookController.getAllBooks)

// post data to db
router.post('/books', bookController.create)

// find data with specific id
router.get('/books/:id', bookController.findOne)

// find data with specific id and update
router.put('/books/:id', bookController.findByIdAndUpdate)

// find data with specific id and delete
router.delete('/books/:id', bookController.findByIdAndRemove)



// ====================== Costumers  ===================== //
// get all data
router.get('/costumers', costumerController.getAllCostumers)

// find data with specific id
router.get('/costumers/:id', costumerController.findOne)

// post data to db
router.post('/costumers', costumerController.create)

// find data with specific id and update
router.put('/costumers/:id', costumerController.findByIdAndUpdate)

// find data with specific id and delete
router.delete('/costumers/:id', costumerController.findByIdAndRemove)






module.exports = router
