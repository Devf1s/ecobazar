const Router = require('express');
const router = new Router();
const basketProductController = require('../controllers/basketProductController');
/* const authMiddleware = require('../middleware/authMiddleware');*/
const { check } = require('express-validator');

router.post('/add', basketProductController.addProduct);
router.post('/del/:ProductId', basketProductController.removeProduct);

module.exports = router;