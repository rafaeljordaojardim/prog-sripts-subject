
const express = require("express");
const router = express.Router();

router.get("/categories", (req, res) =>{
    res.sender("new");
});

router.get("/admin/categories/new", (req, res) =>{
    res.render("new");
});

module.exports = router;