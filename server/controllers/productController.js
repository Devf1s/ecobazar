const ApiError = require('../error/ApiError');
const { Product, Category, ProductInfo, Rating } = require('../models/index');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

// Helper
const checkIdsExist = async (ids, model) => {
	return Promise.all(ids.map((id, i) => model[i].findByPk(id)));
};

class ProductController {
	async create(req, res, next) {
		try {

			const { name, price, salePrice, isSale, description, categoryId, info } = req.body;
			console.log(req.body)
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
				categoryId,
				description
			});

			// === 3. Додавання info, якщо є ===
			if (info) {
				let parsedInfo;
				try {
				parsedInfo = JSON.parse(info);
				} catch (e) {
				return next(ApiError.badRequest('Info must be a valid JSON array.'));
				}

				if (!Array.isArray(parsedInfo)) {
				return next(ApiError.badRequest('Info must be an array.'));
				}

				for (const item of parsedInfo) {
				if (!item.description) {
					return next(ApiError.badRequest('Each info item must contain a description.'));
				}

				await ProductInfo.create({
					description: item.description,
					benefits: item.benefits || [],
					productId: product.id
				});
				}
			}

			return res.status(201).json(product);
		} catch (e) {
			console.log(e)
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
			return res.status(200).json({ message: 'Product deleted successfully!' });
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
			const product = await Product.findByPk(id, { include: [{ model: ProductInfo, as: 'info' }, Category] });
			if (!product) return res.status(404).json({ message: 'Product not found' });
			return res.json(product);
		} catch (e) {
			return next(ApiError.notFound('Error while get product!'));
		}
	};
}
module.exports = new ProductController();