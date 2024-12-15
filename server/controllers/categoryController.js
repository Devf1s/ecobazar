const { Category } = require('../models/models');


class CategoryController {
    // Create a category
    async create(req, res) {
        try {
            const { name } = req.body;
            if (!name) {
                return res.status(400).json({ error: 'Name is required.' });
            }
            const category = await Category.create({ name });
            return res.status(201).json(category);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to create category.' });
        }
    }

    // Get all categories
    async getAll(req, res) {
        try {
            const categories = await Category.findAll();
            return res.status(200).json(categories);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to fetch categories.' });
        }
    }

    // Delete a category by ID
    async delete(req, res) {
        try {
            const { id } = req.body;

            const category = await Category.findByPk(id);
            if (!category) {
                return res.status(404).json({ error: 'Category not found.' });
            }

            await category.destroy();
            return res.status(200).json({ message: 'Category deleted successfully.' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to delete category.' });
        }
    }
}

module.exports = new CategoryController();