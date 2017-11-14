const express = require('express');
const router = express.Router();
const controller = require('../controllers/books')

router.get('/',controller.viewData)
router.post('/',controller.createData)
router.delete('/:id',controller.deleteData)
router.put('/:id',controller.editData)




module.exports = router;
