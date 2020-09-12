function calcular(){
    var n1 = parseFloat(document.getElementById('nota1').value);
    var n2 = parseFloat(document.getElementById('nota2').value);

    var media = (n1 + n2) / 2;

    if (media>6){
        document.write("<h1>Aluno Aprovado</h1>");
    }
    else{
        document.write("<h1>Aluno Reprovado</h1>");  
    }

}

