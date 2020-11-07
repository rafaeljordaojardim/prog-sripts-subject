const Sequelize = require("sequelize");

const connection = new Sequelize('bancojs02','root','root', {
    host:'localhost',
    dialect: 'mysql'
});

module.exports = connection;
