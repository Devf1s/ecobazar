const Router = require('express');
const router = new Router();
const basketController = require('../controllers/basketController');
/* const authMiddleware = require('../middleware/authMiddleware');*/
const { check } = require('express-validator');

router.get('/:UserId', basketController.getOne);
router.post('/', basketController.create);

module.exports = router;