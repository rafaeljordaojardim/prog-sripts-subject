function somar(x1, x2){
    return x1 + x2;
}

function receber(){
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);
    document.write("<h1>Resultado:</h1>");
    document.write("<h2>" + somar(n1,n2)+ "</h2>");
}


