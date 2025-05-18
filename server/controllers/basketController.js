const { Basket, BasketProduct, Product } = require('../models');

class BasketController {
  async getBasket(req, res) {
    const { userId } = req.params;
    const basket = await Basket.findOne({
      where: { userId },
      include: { model: BasketProduct, include: Product }
    });
    return res.json(basket);
  }

  async addItem(req, res) {
    const { basketId, productId, quantity } = req.body;
    const item = await BasketProduct.create({ basketId, productId, quantity });
    return res.status(201).json(item);
  }

  async removeItem(req, res, next) {
    try {
      const { basketId, productId } = req.body;

      if (!basketId || !productId) {
        return res.status(400).json({ message: 'basketId and productId are required' });
      }

      const deleted = await BasketProduct.destroy({
        where: { basketId, productId }
      });

      if (deleted === 0) {
        return res.status(404).json({ message: 'Item not found in basket' });
      }

      return res.json({ message: 'Item removed from basket' });
    } catch (e) {
      console.log(e);
      return next(ApiError.internal('Failed to remove item from basket.'));
    }
  }

}

module.exports = new BasketController();
