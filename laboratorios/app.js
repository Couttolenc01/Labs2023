console.log("Hola desde node!");

//fs es el modulo de filesystem de node, que sirve para acceder a los metodos para manipular el sistema de archivos
const filesystem = require('fs');

//writeFileSync es un metodo que sirve para escribir en un archivo de manera sincrona.
//Por default, los metodos de node son asincronos
filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("Ya acabe de escribir el archivo!");