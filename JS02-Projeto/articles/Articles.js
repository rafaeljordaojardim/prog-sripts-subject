const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

// Category.hasMany(Article); // UMA Categoria tem muitos artigos
// Article.belongsTo(Category); // UM Artigo pertence a uma categoria

// try {    
//     Article.sync({force:true})
// } catch (error) {
//     console.log(`Articles ${error}`);
// }

module.exports = Article;