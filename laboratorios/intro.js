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

//funciones modernas
//funcion sin nombre ()
() => console.log("Esto es una funcion anonima");

//llamar funcion agregando a un evento o a una variable

//Guardando la funcion en memoria

const funcion_anonima = () => {
    console.log("Esto es una funcion anonima");
    
}

funcion_anonima();


//html dinamico con eventos

const francisco = document.getElementById("Francisco");

console.log(francisco);

const despliega_rating = () => {
    const rating = "10/10, excelente nombre";
    francisco.innerHTML = rating;
    francisco.onclick = despliega_nombre;
}

const despliega_nombre = () => {
    const nombre = "Francisco Couttolenc Ortiz";
    francisco.innerHTML = nombre; 
    francisco.onclick = despliega_rating
}

francisco.onclick = () => {
    console.log("hiciste click en Francisco");
    despliega_rating();
    
}

//arreglos 

const arreglo = ["Elemento"];  

//agregar elementos al arreglo

arreglo.push("Elemento 2");

arreglo[10]= "Elemento 3";



//arreglos asociativos
arreglo["once"] = "otro mas";

//reccorido tradicional del arreglo
for(let i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]);
}

//recorrido moderno del arreglo por javascript
//in recorre las posiciones del arreglo
for(let posicion in arreglo) {
    console.log(posicion);
}

//of recorre los valores del arreglo
for(let valor of arreglo) {
    console.log(valor);
}

//objetos (JSON: javascript object notation)
const objeto = {
    atributo_1: "valor_1",
    atributo_2: "valor_2",
    atributo_3: "valor_3",
};

console.log(objeto);
console.log(objeto.atributo_1);