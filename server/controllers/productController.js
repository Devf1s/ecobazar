const ApiError = require('../error/ApiError');
const { Product } = require('../models/models');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

class ProductController {
	async create(req, res) {
		try {
			const { name, price, salePrice, isSale, CategoryId } = req.body;

			// Validation
			if (!name || !price) {
				return res.status(400).json({ error: 'Name and price are required.' });
			}

			let imagePath = null;

			// Check if a file was uploaded
			if (req.files && req.files.image) {
				const imageFile = req.files.image;

				// Validate file type
				if (!imageFile.mimetype.startsWith('image/')) {
					return res.status(400).json({ error: 'Invalid file type. Only images are allowed.' });
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
				image: imagePath, // Null if no image is uploaded
				isSale,
				CategoryId,
			});

			return res.status(201).json(product);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error: 'Failed to create product.' });
		}
	}

	async getAll(req, res) {
		try {
			let { CategoryId, limit, page } = req.query;
			page = page || 1
			limit = limit || 15;
			let offset = page * limit - limit

			let products = null;
			if(CategoryId){
				products = await Product.findAndCountAll({where: {CategoryId}, limit, offset}); // Получение всех записей
			}
			else{
				products = await Product.findAndCountAll({limit, offset }); // Получение всех записей
			}
			return res.status(200).json(products);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error: 'Failed to fetch products.' });
		}
	};

	async getOne(req, res) {
		try {
			const { id } = req.params;
			const product = await Product.findOne({
				where: { id },
				// include: []
			});
			if (!product) return res.status(404).json({ error: 'Product not found!' });
			res.status(200).json(product);
		} catch (error) {
			res.status(500).json({ error: 'Error while get product!' });
		}
	};

	async deleteProduct(req, res) {
		try {
			const { id } = req.body;

			const product = await Product.findByPk(id);
			if (!product) {
				return res.status(404).json({ error: 'Product not found.' });
			}

			await product.destroy();
			return res.status(200).json({ message: 'Product deleted successfully.' });
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error: 'Failed to delete product.' });
		}
	}
}
module.exports = new ProductController();