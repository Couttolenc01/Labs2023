//Post cuando el navegador quiere enviarme un dato, PUT cuando el navegador quiere actualizarme un dato, DELETE cuando el navegador quiere eliminar un dato
//POST recibir determinados datos y guardar en una base de datos
//PUT actualizar datos
//DELETE eliminar datos
//res.json -> objeto de JavaScript
// req.body te permite tomar la informacion que el cliente o la apliacion que te esta enviando
// req.params te permite tomar los parametros que el cliente te esta enviando, quiero que el usuario tenga estos nuevos datos (id)
// Middelware un manejo de peticion, antes de llegar a la ruta procesamos.
//Motor de plantilla EJS

const express = require('express'); //Requiriendo un modulo, utiliza internamente el modulo de http el cual esta establecido en el de app.js
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express(); //Servidor de express

//Settings
app.set('appName', 'Express Tutorial'); //Estableciendo una configuracion
app.set('port', 3000);
app.set('view engine', 'ejs'); //Motor de plantilla


//Middlewares

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
}); 


app.get('/videojuegos/nuevoVideojuego', (request, response, next) => {
    response.send('<h1>Nuevo Videojuego</h1><body><h1>Agrega un videojuego</h1><form action="nuevoVideojuego" method="POST"><input type ="text" name="nombre"><input type="submit" value="Guardar videojuego"></form>'); //Manda la respuesta
});

app.post('/videojuegos/nuevoVideojuego', (request, response, next) => {
    console.log(request.body.nombre);
    response.send('<h1>Videojuego guardado</h1>'); //Manda la respuesta
});

app.use('/videojuegos', (request, response, next) => {
    response.send('<h1>Videojuegos</h1>'); //Manda la respuesta
});

app.use('/', (request, response, next) => {
    response.send('<h1>Hola Mundo!</h1>'); //Manda la respuesta
});

app.use((request, response, next) => {
    console.log('Hola Mundo');
    response.send('¡Hola Mundo!'); //Manda la respuesta
});

 

app.use(express.json()); //Para que el servidor entienda los datos que le envia el navegador

 //Routes



/* app.get('/', (req, res) => { 
    const data = [{name: 'Cameron'}, {name: 'Howe'}, {name: 'Harry'}, {name: 'Potter'}];
    res.render('index.ejs', {people:data}); //Renderiza el archivo index.ejs
});


app.get('/user', (req, res) => {        
     res.json({
            username: 'Cameron',
            lastname: 'Howe'
     });
});

app.post('/user/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('POST REQUEST RECIVED');
});

app.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`User ${req.params.id} UPDATED`);
});

app.delete('/user/:userId', (req, res) => {
    res.send(`User ${req.params.userId} DELETED`);
});

app.use(express.static('public')); //Para que el servidor pueda leer archivos estaticos

app.use((req, res) => {
    res.status(404).send('404 not found');
}); */

app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log('Server on port 3000'); 


});//Puerto en el que se va a correr el servidor 