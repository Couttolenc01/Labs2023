console.log("Hola desde node!");

//fs es el modulo de filesystem de node, que sirve para acceder a los metodos para manipular el sistema de archivos
const filesystem = require('fs');

//writeFileSync es un metodo que sirve para escribir en un archivo de manera sincrona.
//Por default, los metodos de node son asincronos
filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("Ya acabe de escribir el archivo!");

setTimeout(
    () => {
        console.error("Ya te hackie jojo");
    }, 11000
);

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}