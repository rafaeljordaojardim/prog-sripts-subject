const Sequelize = require("sequelize");
const connection = require("../database/database");

const Category = connection.define('categories',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})



// try {    
//     Category.sync({force:true});
// } catch (error) {
//     console.log(`Categories ${error}`);
// }

module.exports = Category;
