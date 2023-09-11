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