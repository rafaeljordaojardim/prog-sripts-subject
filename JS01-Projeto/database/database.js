const Sequelize = require('sequelize');

//trocar para a senha do seu mysql
const connection = new Sequelize('bancojs01', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection; 

