const router = require('express').Router()

//require controller
const transactionsController = require('../controllers/transactionsController');

router.get('/', transactionsController.getAll)

router.post('/', transactionsController.create)

router.put('/:id', transactionsController.update)

router.delete('/:id', transactionsController.deleteTransaction)

//transactions by id
router.get('/:id', transactionsController.getById)


module.exports = router