document.getElementById("sentimiento").onkeyup = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    document.getElementById("sentimiento").style.color = `rgb(${red}, ${green}, ${blue})`;
}

function ejercicio_1(){
    // Generación de una tabla con números, cuadrados y cubos:
    var numeroStr = prompt("Ingresa un número");
    var numero = parseInt(numeroStr); 

    var ejercicio1Result = ""; // Crear una variable para almacenar el resultado de ejercicio 1
    ejercicio1Result += "<p>Respuesta al ejercicio 1:</p>"; // Agregar texto antes de la tabla
    ejercicio1Result += "<table>";
    ejercicio1Result += "<tr> <th> Número  </th> <th> Cuadrado  </th> <th> Cubo </th> </tr>";
    for(var i = 1; i <= numero; i++){
        ejercicio1Result += "<tr> <td>" + i + "</td> <td>" + Math.pow(i,2) + "</td> <td>" + Math.pow(i,3) + "</td> </tr>";
    } 
    ejercicio1Result += "</table>";
    document.getElementById("ejercicio_1").innerHTML = "Respuesta al ejercicio 1";
    document.getElementById("ejercicio_1").innerHTML = ejercicio1Result; // Mostrar el resultado de ejercicio 1
    
}

function ejercicio_2(){
    //Suma de 2 numeros aleatorios:
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
 
    var sumaEsperada = num1 + num2;
 
    var respuesta = prompt("¿Cuánto es " + num1 + " + " + num2 + "?");
 
    var respuestaNumero = parseInt(respuesta);
 
    if (respuestaNumero === sumaEsperada) {
        document.getElementById("resultado").innerHTML = "¡Correcto! La respuesta es " + sumaEsperada;
    } else {
        document.getElementById("resultado").innerHTML = "Incorrecto. La respuesta correcta es " + sumaEsperada;
    }
    document.getElementById("ejercicio_2").innerHTML = "Respuesta al ejercicio 2";
}

// Llamamos primero al ejercicio 1 y luego al ejercicio 2
ejercicio_1();
ejercicio_2();
