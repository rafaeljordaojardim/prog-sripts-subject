// incluir o módulo
var http  = require("http");

http.createServer(function(req,res){
    res.end("<h1>Welcome - Hello World!!!</h1>");

}).listen(3000);

console.log("SERVIDOR RODANDO......");
