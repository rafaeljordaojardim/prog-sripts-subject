function calcular(){
    var num = parseInt(document.getElementById('num').value);

    var i = 0;

    do{
        //let tab = num * i;
        //document.write("<h2>"+ num + "X" + i + "=" + tab + "</h2>");

        document.write("<h2>"+ `${num} X ${i} = ${num * i}`+ "</h2>");
        i++;
    }
    while (i < 11);

}