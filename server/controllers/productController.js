const ApiError = require('../error/ApiError');
const { Product } = require('../models/models');
const { v4:uuidv4 } = require('uuid');
const path = require('path');

class ProductController {
	async create(req, res) {
		try {
			const { name, price, salePrice, isSale } = req.body;
	  
			// Валидация данных
			if (!name || !price) {
			  return res.status(400).json({ error: 'Name and price are required.' });
			}
	  
			let imagePath = null;
	  
			// Проверяем, был ли загружен файл
			if (req.files && req.files.image) {
			  const imageFile = req.files.image;
	  
			  // Проверяем тип файла
			  if (!imageFile.mimetype.startsWith('image/')) {
				return res.status(400).json({ error: 'Invalid file type. Only images are allowed.' });
			  }
	  
			  // Генерируем уникальное имя файла с расширением
			  const imageFileName = `${uuidv4()}${path.extname(imageFile.name)}`;
	  
			  // Путь для сохранения файла
			  imagePath = `../static/${imageFileName}`;
			  const fullPath = path.join(__dirname, '../static', imageFileName);
	  
			  // Сохраняем файл
			  await imageFile.mv(fullPath);
			}
	  
			// Создаём продукт
			const product = await Product.create({
			  name,
			  price,
			  salePrice,
			  image: imagePath, // Если изображения нет, поле будет null
			  isSale,
			});
	  
			return res.status(201).json(product);
		  } catch (error) {
			console.error(error);
			return res.status(500).json({ error: 'Failed to create product.' });
		  }
	};

	async getAll(req, res) {
		try {
			const products = await Product.findAll(); // Получение всех записей
			return res.status(200).json(products);
		}catch (error) {
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
}
module.exports = new ProductController();