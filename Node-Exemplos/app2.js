
// incluir o módulo

var calc = require("./calculadora");

console.log(calc.soma(10,10));
console.log(calc.subtracao(20,10));
console.log(calc.multiplicacao(5,8));
console.log(calc.divisao(100,5));
calc.nome = "Aula de Node.js";
console.log(calc.nome);