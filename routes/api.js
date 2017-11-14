const express = require('express')
const router  = express.Router()
const bookController = require('../controller/books')


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
//router.get('/costumers', )


module.exports = router
