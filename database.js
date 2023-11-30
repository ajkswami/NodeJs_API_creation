const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    "demo_db",
    'root',
    "",
    {
        dialect: 'mysql',
        host: "localhost",
        timezone: '+05:30',
        pool: {
            max: 50,
            min: 0,
            idle: 10000,
            acquire: 60000
        }
    }
);

module.exports = sequelize;
