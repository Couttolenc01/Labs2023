const express = require('express');

const router = express.Router();

router.get('/nuevoVideojuego', (request, response, next) => {
    response.send('<h1>Nuevo Videojuego</h1><body><h1>Agrega un videojuego</h1><form action="nuevoVideojuego" method="POST"><input type ="text" name="nombre"><input type="submit" value="Guardar videojuego"></form>'); //Manda la respuesta
});

router.post('/nuevoVideojuego', (request, response, next) => {
    console.log(request.body.nombre);
    response.send('<h1>Videojuego guardado</h1>'); //Manda la respuesta
});

router.use('/', (request, response, next) => {
    response.send('<h1>Videojuegos</h1>'); //Manda la respuesta
});

module.exports = router;
