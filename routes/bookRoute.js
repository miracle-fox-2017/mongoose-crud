const router = require('express').Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.findBook);
router.post('/', bookController.createBook);
router.put('/:bookId', bookController.updateBook);
router.delete('/:bookId', bookController.deleteBook);

module.exports = router;