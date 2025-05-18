const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
	dialect: 'postgres',
	protocol: 'postgres',
	logging: msg => {
		if (msg.startsWith('Executing (default)')) return;
		console.log(msg);
	},
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false, // Render використовує SSL
		},
	},
});

module.exports = sequelize;
