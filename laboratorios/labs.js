function ejercicio_2(){
    // Generación de una tabla con números, cuadrados y cubos:
    var numeroStr = prompt("Ingresa un número");
    var numero = parseInt(numeroStr); // Convertir la cadena en un número
    document.write("<table>");
    document.write("<tr> <th> Número  </th> <th> Cuadrado  </th> <th> Cubo </th> </tr>");
    for(var i = 1; i <= numero; i++){
        document.write("<tr> <td>" + i + "</td> <td>" + Math.pow(i,2) + "</td> <td>" + Math.pow(i,3) + "</td> </tr>");
    } 
    document.write("</table>");
    document.getElementById("ejercicio_1").innerHTML = "Respuesta al ejercicio 1";
}

ejercicio_2();