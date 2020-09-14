function verificar() {
    var placa = parseInt(document.getElementById('numero').value)

    switch (placa) {
        case 1:
            document.write("<h2>Rodízio na Segunda Feira</h2>");
            break;
        case 2:
            document.write("<h2>Rodízio na Segunda Feira</h2>");
            break;
        case 3:
            document.write("<h2>Rodízio na Terça Feira</h2>");
            break;
        case 4:
            document.write("<h2>Rodízio na Terça Feira</h2>");
            break;
        case 5:
            document.write("<h2>Rodízio na Quarta Feira</h2>");
            break;
        case 6:
            document.write("<h2>Rodízio na Quarta Feira</h2>");
            break;
        case 7:
            document.write("<h2>Rodízio na Quinta Feira</h2>");
            break;
        case 8:
            document.write("<h2>Rodízio na Quinta Feira</h2>");
            break;
        case 9:
            document.write("<h2>Rodízio na Sexta Feira</h2>");
            break;
        case 0:
            document.write("<h2>Rodízio na Sexta Feira</h2>");
            break;
        default:
            document.write("<h2>VALOR INVÁLIDO</h2>");
            break;
    }
}