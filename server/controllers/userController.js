const ApiError = require('../error/ApiError');
const { User, Basket } = require('../models');

const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken'); // JSON Web Token for transmission to client
const { validationResult } = require('express-validator');

// const generateJwt = (id, email, role, next) => {
// 	if (!process.env.SECRET_KEY) {
// 		return next(ApiError.badRequest(jwtTokenErrorMessage));
// 	}

// 	return jwt.sign(
// 		{ id, email, role },
// 		process.env.SECRET_KEY,
// 		{ expiresIn: '24h' }
// 	);
// }

class UserController {
	async register(req, res, next) {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				const errorMessages = errors.errors.map(error => error.msg);
				return next(ApiError.badRequest(errorMessages));
			}
			
			const { email, password } = req.body;
			if (!email || !password) {
				return next(ApiError.badRequest('Uncorrect email or password!'));
			}
			
			const candidate = await User.findOne({ where: { email } });
			if (candidate) {
				return next(ApiError.duplicate('User with such email already exists!'));
			}	
			
			const user = await User.create({email, password})
			const basket = await Basket.create({ userId: user.id });	
			return res.status(200).json({ message: 'User created!', user: user });
		} catch (e) {
			console.log(e);
			return next(ApiError.badRequest('Registration error'));
		}
	}

	async login(req, res, next) {
		try {
			const { email, password } = req.body;
			const user = await User.findOne({ where: { email } });
			if (!user) {
				return next(ApiError.internal('User not found!'));
			}
			
			let comparePassword = bcrypt.compareSync(password, user.password);
			if (!comparePassword) {
				return next(ApiError.badRequest('Incorrect password!'));
			}
			
			// const token = generateJwt(user.id, user.email, user.role);
			// return res.json({ token });
			return res.status(200).json({ message: 'Logged!' });
		} catch (e) {
			console.log(e);
			return next(ApiError.badRequest('Login error!'));
		}
	}

	async edit(req, res) {
		try {
		  	const { id, email, password, isActive } = req.body;	

		  	const user = await User.findByPk(id);
		  	if (!user) {
				return res.status(404).json({ error: 'User not found.' });
		  	}
	
		  	user.email = email ?? user.email;
			user.password = password ?? user.password;
			user.isActive = isActive ?? user.isActive;
	
			await user.save();
	
			return res.status(200).json(user);
		}catch (error) {
			console.error(error);
			return res.status(500).json({ error: 'Failed to edit user.' });
		}
	}

	async delete(req, res, next) {
        try {
            const { id } = req.params;
            const deleted = await User.destroy({ where: { id } });
            if (!deleted) {
                return next(ApiError.badRequest('User not found'));
            }
            return res.json({ message: 'User deleted successfully!' });
        } catch (e) {
            console.log(e);
            return next(ApiError.internal('Internal server error'));
        }
    }

	async getAll(req, res) {
		try {
			const users = await User.findAll();
			res.json(users);
		} catch (e) {
			console.log(e);
		}
	}
	
	async getOne(req, res) {
		try {
		  	const { id } = req.params;
		  	const user = await User.findByPk(id);
		  	if (!user) {
				return res.status(404).json({ error: 'User not found.' });
		  	}
		  	return res.status(200).json(user);
		}catch (error) {
		  	console.error(error);
		  	return res.status(500).json({ error: 'Failed to fetch user.' });
		}
	}

}
module.exports = new UserController();