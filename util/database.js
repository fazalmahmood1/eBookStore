const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'prince786', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
