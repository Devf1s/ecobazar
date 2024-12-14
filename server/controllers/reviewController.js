const {Review} = require('../models/models');

class ReviewController {
    // Create a review
    async create(req, res) {
        try {
            const { productId, userId, content, rating } = req.body;
            if (!productId || !userId || !content || !rating) {
                return res.status(400).json({ error: 'All fields are required.' });
            }
            const review = await Review.create({ productId, userId, content, rating });
            return res.status(201).json(review);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to create review.' });
        }
    }

    // Delete a review
    async delete(req, res) {
        try {
            const { id } = req.params;

            const review = await Review.findByPk(id);
            if (!review) {
                return res.status(404).json({ error: 'Review not found.' });
            }

            await review.destroy();
            return res.status(200).json({ message: 'Review deleted successfully.' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to delete review.' });
        }
    }

    // Edit a review
    async edit(req, res) {
        try {
            const { id } = req.params;
            const { content, rating } = req.body;

            const review = await Review.findByPk(id);
            if (!review) {
                return res.status(404).json({ error: 'Review not found.' });
            }

            review.content = content ?? review.content;
            review.rating = rating ?? review.rating;

            await review.save();
            return res.status(200).json(review);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to edit review.' });
        }
    }

    // Get a single review by ID
    async getOne(req, res) {
        try {
            const { userId, productId } = req.params;

            const review = await Review.findOne({where:{productId, userId}});
            if (!review) {
                return res.status(404).json({ error: 'Review not found.' });
            }

            return res.status(200).json(review);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to fetch review.' });
        }
    }

    // Get all reviews for a product
    async getAllbyProduct(req, res) {
        try {
            const { productId } = req.params;

            const reviews = await Review.findAll({ where: { productId } });
            return res.status(200).json(reviews);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to fetch reviews.' });
        }
    }
}

module.exports = new ReviewController();