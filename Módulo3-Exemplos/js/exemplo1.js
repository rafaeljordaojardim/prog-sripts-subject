
//eval() função nativa = executa um cálculo representado como uma string
//template strings são strings que permitem expressões embutidas ${}
function somar(x1, x2, op) {
    if (op == "/" || op == "%") {
        if (x2 == 0) {
            document.write("<h2>Divisão por 0</h2>");
        }
    }
    return eval(`${x1} ${op} ${x2}`);
}

function receber() {
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);
    var op = document.getElementById('op').value;

    document.write("<h1>Resultado:</h1>");
    document.write("<h2>" + somar(n1, n2, op) + "</h2>");

}



