//Post cuando el navegador quiere enviarme un dato, PUT cuando el navegador quiere actualizarme un dato, DELETE cuando el navegador quiere eliminar un dato
//POST recibir determinados datos y guardar en una base de datos
//PUT actualizar datos
//DELETE eliminar datos
//res.json -> objeto de JavaScript
// req.body te permite tomar la informacion que el cliente o la apliacion que te esta enviando
// req.params te permite tomar los parametros que el cliente te esta enviando, quiero que el usuario tenga estos nuevos datos (id)

const express = require('express'); //Requiriendo un modulo, utiliza internamente el modulo de http el cual esta establecido en el de app.js
const app = express(); //Servidor de express

app.use(express.json()); //Para que el servidor entienda los datos que le envia el navegador

 //Ruta inicial del servidor
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

app.listen(3000, () => console.log('Server on port 3000')); //Puerto en el que se va a correr el servidor 