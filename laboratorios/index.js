//Post cuando el navegador quiere enviarme un dato, PUT cuando el navegador quiere actualizarme un dato, DELETE cuando el navegador quiere eliminar un dato
//POST recibir determinados datos y guardar en una base de datos
//PUT actualizar datos
//DELETE eliminar datos
//res.json -> objeto de JavaScript
// req.body te permite tomar la informacion que el cliente o la apliacion que te esta enviando
// req.params te permite tomar los parametros que el cliente te esta enviando, quiero que el usuario tenga estos nuevos datos (id)
// Middelware un manejo de peticion, antes de llegar a la ruta procesamos.
//Motor de plantilla EJS
//Carpeta PUBLIC es la que estara expuesta a todo el internet, para acceder a los demas archivos desde fuera

const express = require('express'); //Requiriendo un modulo, utiliza internamente el modulo de http el cual esta establecido en el de app.js
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express(); //Servidor de express


//funcion set sirve para cambiar los valores de las variables globales

app.set('view engine', 'ejs'); //express utiliza el motor de vista ejs
app.set('views', 'views'); // la carpeta donde se ecuentran todas mis vistas es views


//Settings
app.set('appName', 'Express Tutorial'); //Estableciendo una configuracion
app.set('port', 3000);
app.set('view engine', 'ejs'); //Motor de plantilla


//Middlewares

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended: false}));

//Para acceder a los recursos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()); //Para que el servidor entienda los datos que le envia el navegador

app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
}); 


const rutasVideojuegos = require('./Routes/videojuegos.routes');
const rutasTienda = require('./Routes/tienda.routes');


app.use('/videojuegos', rutasVideojuegos);
app.use('/tienda', rutasTienda);

app.get('/inicio', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'inicio.html'));
});


app.use((req, res) => {
    res.status(404).send('Página no encontrada');
  });

app.use((request, response, next) => {
    console.log('Hola Mundo');
    response.send('¡Hola Mundo!'); //Manda la respuesta
});

app.listen(3000); 

 //Routes

//const rutasLabs = require('./routes/labs');

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



/*app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log('Server on port 3000'); 


});//Puerto en el que se va a correr el servidor */

