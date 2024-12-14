const sequelize = require('../db'); // import Object 
const { DataTypes } = require('sequelize'); // import class that describes field types

// User Model
const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

// Basket Model
const Basket = sequelize.define('Basket', {
});

// Category Model
const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Product Model
const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  salePrice: {
    type: DataTypes.FLOAT,
  },
  image: {
    type: DataTypes.STRING,
  },
  isSale: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

// BasketProduct Model
const BasketProduct = sequelize.define('BasketProduct', {
	id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true },
  quantity: { type: DataTypes.INTEGER, defaultValue:1, validate:{min:1, max: 100}}
});

// Review Model
const Review = sequelize.define('Review', {
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  rate: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
});

// Связи
User.hasOne(Basket);
Basket.belongsTo(User);

Basket.belongsToMany(Product, { through: BasketProduct });
Product.belongsToMany(Basket, { through: BasketProduct });

Category.hasMany(Product);
Product.belongsTo(Category);

Product.hasMany(Review);
Review.belongsTo(Product);

User.hasMany(Review);
Review.belongsTo(User);

module.exports = {
  User, Basket, Category, Product, BasketProduct, Review, 
};
