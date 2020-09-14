function funcao1(selectObject) {
    var numero = 0;

    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            numero++;
        }

    }
    return numero;
}


var botao = document.getElementById('botao1');

botao.addEventListener("click", function () {
    alert("Total de opções selecionadas: " + funcao1(document.selectForm.tipoMusica))
});