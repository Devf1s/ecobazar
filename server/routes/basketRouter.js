const Router = require('express');
const router = new Router();
const basketController = require('../controllers/basketController');

router.get('/:userId', basketController.getBasket);
router.post('/add', basketController.addItem);
router.delete('/remove', basketController.removeItem);

module.exports = router;
