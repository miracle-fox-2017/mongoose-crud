const express = require('express')
const books   = require('../controllers/bookControllers')
const router  = express.Router()

router.post('/', books.createBook)

module.exports = router