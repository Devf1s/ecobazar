const { Basket, BasketProduct, Product } = require('../models/models');

class BasketController {
    async getOne(req, res) {
        try {
            const { UserId } = req.params;
            const basket = await Basket.findOne({
                where: { UserId },
                include: [{
                    model: Product,
                    through: { attributes: ['quantity']},
                }],
            });

            if (!basket) {
                return res.status(404).json({ error: 'Basket not found.' });
            }

            return res.status(200).json(basket);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to fetch basket.' });
        }
    }

    async create(req, res) {
        try {
            const { UserId } = req.body;
            const basket = await Basket.create({ UserId });
            return res.status(201).json(basket);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to create basket.' });
        }
    }
}

module.exports = new BasketController();