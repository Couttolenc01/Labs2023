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

const cookieParser = require('cookie-parser');

const session = require('express-session');

const csrf = require('csurf');
const csrfProtection = csrf();



//funcion set sirve para cambiar los valores de las variables globales

app.set('view engine', 'ejs'); //express utiliza el motor de vista ejs
app.set('views', 'views'); // la carpeta donde se ecuentran todas mis vistas es views


//Settings
app.set('appName', 'Express Tutorial'); //Estableciendo una configuracion
app.set('port', 3000);



//Middlewares

app.use(morgan('dev'))

app.use(bodyParser.json());

//Para acceder facilmente a los datos de las formas
app.use(bodyParser.urlencoded({extended: false}));

const multer = require('multer');

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().getMilliseconds() + file.originalname);
    },
});

//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage }).single('imagen')); 

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//Para acceder a los valores de las cookies
app.use(cookieParser());


//Para trabajar con sesiones
app.use(session({
    secret: 'Labs2023', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));



//Para acceder a los recursos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));


app.use(csrfProtection);


app.use(express.json()); //Para que el servidor entienda los datos que le envia el navegador



app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
}); 




const rutasVideojuegos = require('./Routes/videojuegos.routes');
const rutasTienda = require('./Routes/tienda.routes');
const rutasAppTareas = require('./Routes/appTareas.routes');
const rutasUsers = require('./Routes/users.routes');




app.use('/videojuegos', rutasVideojuegos);
app.use('/tienda', rutasTienda);
app.use('/appTareas', rutasAppTareas);
app.use('/users', rutasUsers);



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

