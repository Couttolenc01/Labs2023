console.log("Hola desde node!");

//fs es el modulo de filesystem de node, que sirve para acceder a los metodos para manipular el sistema de archivos
const filesystem = require('fs');

//writeFileSync es un metodo que sirve para escribir en un archivo de manera sincrona.
//Por default, los metodos de node son asincronos
filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("Ya acabe de escribir el archivo!");

//Imprime a los 11 segundos el mensaje
setTimeout(
    () => {
        console.error("Ya te hackie jojo");
    }, 11000
);

//el siguiente codigo imrpime de manera asincrona el arreglo ordenado
const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}


//El modulo http contiene las funciones para 
//recibir peticiones HTTP y enviar respuestas de HTTP
const http = require('http');

const server = http.createServer( (request, response) => {

});

server.listen(3000);