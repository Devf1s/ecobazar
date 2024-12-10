const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
/* const authMiddleware = require('../middleware/authMiddleware');*/
const { check } = require('express-validator');

router.post('/register', [
	check('email', 'Email cannot be empty!').notEmpty(),
	check('password', 'Password must be at least 8 characters long!').isLength({ min: 8 }),
], userController.registration);
router.post('/login', userController.login);
// router.get('/auth', authMiddleware, userController.check);

module.exports = router;