const { Basket, BasketProduct, Product } = require('../models/models');

class BasketProductController {
    // Add a product to the basket
    async addProduct(req, res) {
        try {
            const { BasketId, ProductId, quantity } = req.body;

            const basket = await Basket.findByPk(BasketId);
            if (!basket) {
                return res.status(404).json({ error: 'Basket not found.' });
            }

            const product = await Product.findByPk(ProductId);
            if (!product) {
                return res.status(404).json({ error: 'Product not found.' });
            }

            const basketProduct = await BasketProduct.create({
                BasketId,
                ProductId,
                quantity,
            });

            return res.status(201).json(basketProduct);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to add product to basket.' });
        }
    }

    // Remove a product from the basket
    async removeProduct(req, res) {
        try {
            const { ProductId } = req.params;

            const basketProduct = await BasketProduct.findOne({where:{ ProductId }});
            if (!basketProduct) {
                return res.status(404).json({ error: 'Basket product not found.' });
            }

            await basketProduct.destroy();
            return res.status(200).json({ message: 'Product removed from basket.' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to remove product from basket.' });
        }
    }
}

module.exports = new BasketProductController();