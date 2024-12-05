const ApiError = require('../error/ApiError');
// const { Product } = require('../models');

class ProductController {
	async getAll(req, res) {
		try {
			const products = await Product.findAll();
			res.status(200).json({ message: 'get All products', products });
		} catch (error) {
			res.status(500).json({ error: 'Erro while get all products!' });
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
}
module.exports = new ProductController();