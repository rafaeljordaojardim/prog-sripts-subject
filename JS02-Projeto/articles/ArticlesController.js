const express = require("express");
const router = express.Router();
const Category = require('../categories/Category');
const adminAuth = require('../middlewares/adminAuth');
const Articles = require('./Articles');
const slugify = require('slugify');

router.get("/articles", (req, res) =>{
    res.send("Rota de Artigos");
});

router.get("/admin/articles", adminAuth, (req, res) =>{
    Articles.findAll({
        include: [{model: Category}]
    }).then(articles => {
        res.render("admin/articles/index", { articles });
    });
});

router.get("/admin/articles/new", adminAuth, (req, res) =>{
    Category.findAll().then(categories => {
        res.render("admin/articles/new", { categories });
    })   
});

router.get("/admin/articles/edit/:id", adminAuth, (req, res) =>{
    const { id } = req.params;
    console.log('ID', id);
    Articles.findByPk(id).then(article => {
        if (article) {
            console.log('Article', JSON.stringify(article));
            Category.findAll().then(categories => {
                res.render("admin/articles/edit", { categories, article })
            });
        } else {
            res.redirect("/")
        }
    }).catch(err => {
        res.redirect("/")
    })
});

router.post("/articles/save", adminAuth, (req, res) =>{
    const { title, body, category } = req.body;
    Articles.create({
        title,
        slug: slugify(title),
        body,
        categoryId: category
    }).then(() => res.redirect('/admin/articles'))
});

router.post("/articles/delete", adminAuth, (req, res) =>{
    const { id } = req.body;
    if (id != undefined) {
        if (!isNaN(id)) {
            Articles.destroy({
                where: {
                    id
                }
            }).then(() => {
                res.redirect('/admin/articles')
            })
        }else {
            res.redirect('/admin/articles')
        }
    } else {
        res.redirect('/admin/articles')
    }
});

router.post("/articles/update", adminAuth, (req, res) =>{
    const { id, title, body, category } = req.body;

    Articles.update({title, body, categoryId: category, slug: slugify(title)}, {
        where: {
            id
        }
    }).then(() => {
        res.redirect("/admin/articles");
    }).catch(err => {
        res.redirect("/")
    })
});

router.get("/articles/page/:num", (req, res) =>{
    const { page } = req.params;
    let offset = 0;

    if (isNaN(page) || page == 1) {
        offset = 0;
    } else {
        offset = (parseInt(page) - 1) * 4;  
    }
    Articles.findAndCountAll({
        limit: 4,
        offset
    }).then(articles => {
        let next;
        if (offset + 4 >= articles.count) {
            next = false;
        } else {
            next = true;
        }

        const result = {
            page: parseInt(page),
            next,
            articles
        };

        Category.findAll().then(categories => {
            res.render("admin/articles/page", { result, categories })
        });
    });
});

module.exports = router;