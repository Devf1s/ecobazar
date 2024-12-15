const Router = require('express');
const router = new Router();
const reviewController = require('../controllers/reviewController');
/* const authMiddleware = require('../middleware/authMiddleware');*/
const { check } = require('express-validator');

router.post('/add', reviewController.create);
router.post('/del/:id', reviewController.delete);
router.post('/edit/:id', reviewController.edit);
router.get('/:UserId/:ProductId', reviewController.getOne);
router.get('/:ProductId', reviewController.getAllbyProduct);

module.exports = router;