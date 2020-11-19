const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./database/database");
const session = require("express-session");

const app = express();

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");
const usersControler = require("./users/UsersController");

const Article = require("./articles/Articles");
const Category = require("./categories/Category");
const User = require("./users/User");

app.set('view engine','ejs');

app.use(session({
    secret: "textoqualquer", cookie: { maxAge: 300000}
}))

app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(bodyParser.json());

connection
    .authenticate()
    .then(()=>{
        console.log("Conexão feita com sucesso");
    }).catch((error)=>{
        console.log(error);
    });

app.use(express.static('public'));

app.use("/", categoriesController);
app.use("/", articlesController);
app.use("/", usersControler);

app.get("/",(req,res)=>{
    Article.findAll({
        order: [
            ['id', 'DESC']
        ],
        limit: 4
    }).then(articles => {
        Category.findAll().then(categories => {
            res.render("index", { articles, categories });
        });
        console.log('INTO THE THEN');
    });
});

app.get("/:slug",(req,res)=>{
  const { slug } = req.params;
  Article.findOne({
      where: { slug }
  }).then(article => {
      if (article) {
          Category.findAll().then(categories => {
              res.render("article", { article, categories})
          })
      } else {
          res.redirect('/');
      }
  }).catch(err => {
      res.redirect("/");
  })
});

app.get("/category/:slug",(req,res)=>{
    const { slug } = req.params;
    Category.findOne({
        where: { slug },
        include: [{ model: Article }]
    }).then(category => {
        if (category) {
            Category.findAll().then(categories => {
                res.render("article", { articles: category.articles, categories})
            })
        } else {
            res.redirect('/');
        }
    }).catch(err => {
        res.redirect("/");
    })
  });


console.log('AFTER THEN');

app.listen(8080, () =>{
    console.log("RODANDO"); 
});
