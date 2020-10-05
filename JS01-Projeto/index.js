//importando os módulos

const express = require("express");

//criando uma instância do express
const app = express();

//adicionando a view engine - ejs
app.set('view engine', 'ejs');


app.use(express.static('public'));

//rotas
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/cadastro", (req, res) =>{
    res.render("frmCadastro")
});


app.listen(4000, () => {
    console.log("SERVIDOR RODANDO");
});