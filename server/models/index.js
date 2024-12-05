const sequelize = require('../db'); // import Object 
const { DataTypes } = require('sequelize'); // import class that describes field types

const User = sequelize.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING },
	isActived: { type: DataTypes.BOOLEAN }
});

const Product = sequelize.define('product', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: {  },
	price: {  },
	salePrice: { },
	image: { }, 
	reviews: { },
	isSale: { }, 
	email: { type: DataTypes.STRING, unique: true },
	category: { }
}); // Верю в тебя xD Lol LMFAO XDDD KEK 1000-7

const Basket = sequelize.define('basket', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

const Rating = sequelize.define('rating', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	rate: { type: DataTypes.INTEGER, allowNull: false }
});

// Intermediate models
// const A_B = sequelize.define('a_b', {
// 	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
// });

// Type of links
// A.belongsToMany(Brand, { through: A_B });
// B.belongsToMany(Type, { through: A_B });

// How models are related to each other 
User.hasOne(Basket);
Basket.belongsTo(User);

module.exports = {
	User,
	Basket,
	Product
}