function calcular() {
    var nome = document.getElementById('nome').value;
    var n1 = parseFloat(document.getElementById('nota1').value);
    var n2 = parseFloat(document.getElementById('nota2').value);


    var media = (n1 + n2) / 2;

    if (media >= 6) {
        document.write("<h1>O aluno " + nome + " está APROVADO com a média " + media + "</h1>");
    }
    else if(media >=4 ){
        document.write("<h1>O aluno " + nome + " terá que fazer SUB sua média é " + media + "</h1>");
    }
    else{
        document.write("<h1>O aluno " + nome + " está REPROVADO com a média " + media + "</h1>");
    }

}