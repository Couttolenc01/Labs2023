document.getElementById("sentimiento").onkeyup = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    document.getElementById("sentimiento").style.color = `rgb(${red}, ${green}, ${blue})`;
}

function ejercicio_1() {
    // Generación de una tabla con números, cuadrados y cubos:
    var numeroStr = prompt("Ingresa un número");
    var numero = parseInt(numeroStr);

    var ejercicio1Result = "";
    ejercicio1Result += "<p>Respuesta al ejercicio 1:</p>";
    ejercicio1Result += "<table>";
    ejercicio1Result += "<tr> <th> Número  </th> <th> Cuadrado  </th> <th> Cubo </th> </tr>";
    for (var i = 1; i <= numero; i++) {
        ejercicio1Result += "<tr> <td>" + i + "</td> <td>" + Math.pow(i, 2) + "</td> <td>" + Math.pow(i, 3) + "</td> </tr>";
    }
    ejercicio1Result += "</table>";
    document.getElementById("ejercicio_1").innerHTML = ejercicio1Result;
}

function ejercicio_2() {
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

function ejercicio_3(arr) {
    var negativos = 0;
    var ceros = 0;
    var positivos = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativos++;
        } else if (arr[i] === 0) {
            ceros++;
        } else {
            positivos++;
        }
    }

    var ejercicio3Result = "<p>Respuesta al ejercicio 3:</p>";
    ejercicio3Result += "Negativos: " + negativos + ", Ceros: " + ceros + ", Positivos: " + positivos;

    document.getElementById("ejercicio_3").innerHTML = ejercicio3Result;
    
    return {
         negativos,
         ceros,
         positivos
    };
}

// Ejemplo de uso
const numeros = [-2, 0, 5, -1, 0, 3, 7];

// Llamamos primero al ejercicio 1, luego al ejercicio 2 y finalmente al ejercicio 3
ejercicio_1();
ejercicio_2();
ejercicio_3(numeros);
