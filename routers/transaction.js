const router = require('express').Router();
const controller = require('../controller/transaction')

router.get('/', controller.findAll)
router.post('/:customerId/', controller.makeTransaction)
router.put('/:id', controller.updateBooklist)

module.exports = router;