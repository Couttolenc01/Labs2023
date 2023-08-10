// variables, constantes, consola (log, info, warn, error, assert)

//formas de decarar variables

let pelicula_del_momento = "Avengers End Game";

//Imprimimos en la consola con console.log()
console.log(pelicula_del_momento);

//Declaramos constantes con const
const precio = 55;

console.log(precio);

console.error("Este es un mensaje de error");

console.warn("Este es un mensaje de advertencia");

console.info("Este es un mensaje de información");

// assert continua con la ejecución del programa

console.assert(precio < 50, "El precio no puede ser menor a 50");



// Alcance de las variables

if (precio > 50){
    let respuesta = "Muy caro";
    console.log(respuesta);

}else {
    let respuesta = "Muy barato";
    console.log(respuesta);

}

//cuando declaramos una funcion con let, solo vive dentro de las llaves, pero si mandamos un console log fuera de las llaves, no va a funcionar
//mientras que si declaramos una funcion var si colocamos el console log fuera de las llaves, si va a funcionar

for(let i = 1; i <= 10; i++){
    console.log(i);
}

//alert, prompt, confirm

alert("Hola mundo");

const is_hungry = confirm("¿Tienes hambre?");
console.log(is_hungry);

const nombre = prompt("¿Cuál es tu nombre?");
console.log("hola" + nombre);

//funciones tradicionales

function vamonos(){
    console.log("Vamonos, ya se acabo la calse");
}

vamonos();