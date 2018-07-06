var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController')
/* GET users listing. */
router.get('/', bookController.findAllDataBooks);
router.get('/:id', bookController.findDataBookById)
router.put('/:id', bookController.updateDataBookById)
router.delete('/:id', bookController.deleteDataById)
router.post('/', bookController.insertIntoBooks)
module.exports = router;
