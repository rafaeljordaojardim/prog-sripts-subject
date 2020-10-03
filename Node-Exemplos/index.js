
// importando o módulo
const express = require("express");

// iniciando o express
const app = express();

app.listen(4000, function(e){
    if (e) {
        console.log("Ocorreu um ERRO");
    }
    else{
      console.log("SERVIDOR INICIADO!");  
    }
});


// criando as primeiras rotas com o express

app.get("/", function(req,res){
    res.send("<h1>Minha primeira Rota com express</h1>");
});

app.get("/blog/artigo", function(req, res){
    res.send("<h1>Rota do Artigo Alterado</h1>");
});

app.get("/canal/youtube", function(req,res){
    res.send("<h1>Bem vindo ao Canal!</h1>");
});

