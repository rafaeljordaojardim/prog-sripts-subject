//importando os módulos

const express = require("express");

const bodyParser = require("body-parser");

const connection = require("./database/database");

const perguntaModel = require("./database/Pergunta");

//criando uma Promisse
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    });

//criando uma instância do express
const app = express();

//adicionando a view engine - ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//rotas
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/cadastro", (req, res) => {
    res.render("frmCadastro")
});

app.post("/salvarpergunta", (req, res) => {
    //pegar as informações que estão vindo do form
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    perguntaModel.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    });
});

app.listen(4000, () => {
    console.log("SERVIDOR RODANDO");
});