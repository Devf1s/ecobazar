const { Rating } = require('../models');

class RatingController {
  async add(req, res) {
    const { rate, userId, productId } = req.body;
    const rating = await Rating.create({ rate, userId, productId });
    return res.status(201).json(rating);
  }

  async getByProduct(req, res) {
    const { id } = req.params;
    const ratings = await Rating.findAll({ where: { productId: id } });
    return res.json(ratings);
  }
}

module.exports = new RatingController();
