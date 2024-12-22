const Router = require('express');
const router = new Router();
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.getAll);
router.post('/add', categoryController.create);
router.delete('/del', categoryController.delete);

module.exports = router;