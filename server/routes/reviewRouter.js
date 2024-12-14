const Router = require('express');
const router = new Router();
const reviewController = require('../controllers/reviewController');
/* const authMiddleware = require('../middleware/authMiddleware');*/
const { check } = require('express-validator');

router.post('/add', reviewController.create);
router.post('/del', reviewController.delete);
router.post('/edit', reviewController.edit);
router.get('/:product&:user', reviewController.getOne);
router.get('/:product', reviewController.getAllbyProduct);

module.exports = router;