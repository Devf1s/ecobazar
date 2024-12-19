const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
/* const authMiddleware = require('../middleware/authMiddleware');*/
const { check } = require('express-validator');

router.post('/register', [
	check('email', 'Email cannot be empty!').notEmpty(),
	check('password', 'Password must be at least 8 characters long!').isLength({ min: 8 }),
], userController.register);
router.post('/login', userController.login);
router.edit('/edit', userController.edit);
router.get('/', userController.getAll);
router.get('/:id', userController.getOne);

module.exports = router;