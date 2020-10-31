//importando os módulos

const express = require("express");

const bodyParser = require("body-parser");

const connection = require("./database/database");

const perguntaModel = require("./database/Pergunta");

const Resposta = require("./database/Resposta");

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
    perguntaModel.findAll({
        raw: true, order: [
            ['id', 'DESC'] // alterando a ordenação
        ]}).then(perguntas => {  // select * from perguntas
        res.render("index", {
            perguntas: perguntas
        });
    });
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

//rota para a página de pergunta

app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id;
    perguntaModel.findOne({
        where: { id: id }
    }).then(pergunta => {
        if (pergunta != undefined) { //perguta encontrada
            // carrego do banco de dados
            Resposta.findAll({
                where: {perguntaId: pergunta.id},
                order: [
                  ['id', 'DESC']  
                ]
            }).then(respostas =>{
                res.render("pergunta", {
                    pergunta: pergunta,
                    respostas: respostas
                });
            })
        } else {
            res.redirect("/");
        }
    });
});

//rota para responder

app.post("/responder", (req, res) =>{
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;

    Resposta.create({ // insert into
        corpo: corpo,
        perguntaId: perguntaId
    }).then(()=>{
        res.redirect("/pergunta/" + perguntaId);
    });
});

app.listen(4000, () => {
    console.log("SERVIDOR RODANDO");
});