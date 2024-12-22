const sequelize = require('../db'); // import Object 
const { DataTypes } = require('sequelize'); // import class that describes field types

// User Model
const User = sequelize.define('user', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	isActive: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	},
});

// Basket Model
const Basket = sequelize.define('basket', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	}
});

// BasketProduct Model
const BasketProduct = sequelize.define('basket_product', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	quantity: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		validate: { min: 1, max: 100 }
	}
});

// Product Model
const Product = sequelize.define('product', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false
	},
	price: {
		type: DataTypes.FLOAT,
		allowNull: false
	},
	salePrice: {
		type: DataTypes.FLOAT
	},
	isSale: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	},
	image: {
		type: DataTypes.STRING,
		allowNull: false
	},
	// rating: {
	// 	type: DataTypes.INTEGER,
	// 	defaultValue: 0
	// },
	reviews: {
		type: DataTypes.INTEGER,
		defaultValue: 0
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false
	}
});

// Rating Model
const Rating = sequelize.define('rating', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	rate: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
});

// Category Model
const Category = sequelize.define('category', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	}
});

// ProductInfo Model
const ProductInfo = sequelize.define('product_info', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	description: {
		type: DataTypes.STRING,
		allowNull: true
	},
	benefits: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		allowNull: true,
		defaultValue: []
	}
});

// Links
User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Category.hasMany(Product);
Product.belongsTo(Category);

Product.hasMany(Rating);
Rating.belongsTo(Product);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Product.hasOne(ProductInfo, {as: 'info'});
ProductInfo.belongsTo(Product);


// -------------------------
// User.hasOne(Basket);
// Basket.belongsTo(User);

// Basket.belongsToMany(Product, { through: BasketProduct });
// Product.belongsToMany(Basket, { through: BasketProduct });

// Category.hasMany(Product);
// Product.belongsTo(Category);

// Product.hasMany(Review);
// Review.belongsTo(Product);

// User.hasMany(Review);
// Review.belongsTo(User);
// -------------------------

module.exports = {
	User,
	Basket,
	BasketProduct,
	Product,
	Rating,
	Review,
	Category,
	ProductInfo
};