console.log("Hola desde node!");

const filesystem = require('fs');

filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("Ya acabe de escribir el archivo!");