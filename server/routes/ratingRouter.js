const Router = require('express');
const router = new Router();
const ratingController = require('../controllers/ratingController');

router.post('/add', ratingController.add);
router.get('/product/:id', ratingController.getByProduct);

module.exports = router;
