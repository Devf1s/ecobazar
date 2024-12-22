const ApiError = require('../error/ApiError');
const { Product, Category, ProductInfo, Rating } = require('../models');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

// Helper
const checkIdsExist = async (ids, model) => {
	return Promise.all(ids.map(async (id) => await model.findByPk(id)));
};

class ProductController {
	async create(req, res) {
		try {
			const { 
				name, price, salePrice, isSale, 
				reviews, ratingId, categoryId, description, info 
			} = req.body;

			const [isCategory, isRating] = await checkIdsExist(
				[categoryId, ratingId],
				[Category, Rating]
			);

			// Validation
			if (
				[name, description].includes(undefined) || 
				[price, salePrice, reviews].some(isNaN) || 
				isSale == null
			) {
				return next(ApiError.badRequest('Missed required fields: Ensure all fields are valid and not empty'));
			}
			if (!isCategory) {
				return next(ApiError.badRequest('Category does not exist.'));
			}
			if (!isRating) {
				return next(ApiError.badRequest('Rating does not exist.'));
			}

			let imagePath = null;

			// Check if a file was uploaded
			if (req.files && req.files.image) {
				const imageFile = req.files.image;

				// Validate file type
				if (!imageFile.mimetype.startsWith('image/')) {
					throw ApiError.invalidFileType('Invalid file type. Only images are allowed.');
				}

				// Generate unique file name with extension
				const imageFileName = `${uuidv4()}${path.extname(imageFile.name)}`;

				// Resolve path for saving the file
				imagePath = path.resolve(__dirname, '../static', imageFileName);

				// Save the file
				await imageFile.mv(imagePath);
			}

			// Create product
			const product = await Product.create({
				name,
				price,
				salePrice,
				isSale,
				image: imagePath, // Null if no image is uploaded
				reviews,
				ratingId,
				categoryId,
				description
			});
			console.log(product);

			if (info) {
				info = JSON.parse(info);
				info.forEach(el => {
					ProductInfo.create({
						description: el.description,
						benefits: el.benefits,
						productId: product.id
					});
				});
			}
			return res.status(200).json(product);
		} catch (e) {
			return next(ApiError.internal('Failed to create product.'));
		}
	}

	async delete(req, res, next) {
		try {
			const { id } = req.params;
			const deleted = await Product.destroy({ where: { id } });
			if (!deleted) {
				return next(ApiError.badRequest('Product not found'));
			}
			return res.status(200).json({ message: 'Device deleted successfully!' });
		} catch (e) {
			return next(ApiError.internal('Failed to delete product.'));
		}
	}

	async getAll(req, res) {
		try {
			let { categoryId, limit, page } = req.query;

			page = page || 1
			limit = limit || 15;
			let offset = page * limit - limit

			const products = await Product.findAndCountAll({
				...(categoryId && { where: { categoryId } }), 
				limit, 
				offset
			}); // return all events from db
			return res.status(200).json(products);
		} catch (e) {
			return next(ApiError.internal('Failed to fetch product.'));
		}
	};

	async getOne(req, res) {
		try {
			const { id } = req.params;
			const category = await Category.findOne({ where: { id } });
			if (!category) return next(ApiError.notFound('Product not found!'));
			res.status(200).json(category);
		} catch (e) {
			return next(ApiError.notFound('Error while get product!'));
		}
	};
}
module.exports = new ProductController();