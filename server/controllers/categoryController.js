const ApiError = require('../error/ApiError');
const { Category } = require('../models');

class CategoryController {
	async create(req, res, next) {
		try {
			const { name } = req.body;
			if (!name) return next(ApiError.badRequest('Missing required fields.'));
			const category = await Category.create({ name });
			return res.status(201).json(category);
		} catch (error) {
			return next(ApiError.badRequest('Failed to create product.'));
		}
	}

	async delete(req, res, next) {
		try {
			const { id } = req.params;
			const deleted = await Category.destroy({ where: { id } });
			if (!deleted) {
				return next(ApiError.notFound('Category not found.'));
			}
			return res.status(200).json({ message: 'Product deleted successfully.' });
		} catch (error) {
			return next(ApiError.internal('Failed to delete product.'));
		}
	}

	async getAll(req, res, next) {
		try {
			const categories = await Category.findAll(); 
			return res.status(200).json(categories);
		} catch (e) {
			return next(ApiError.badRequest('Failed to fetch products.'));
		}
	}
}
module.exports = new CategoryController();