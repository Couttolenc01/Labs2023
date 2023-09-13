const express = require('express');

const router = express.Router();

const entries = [];

const appTareasController = require('../controllers/appTareas_controller');


router.get('/', appTareasController.get);


router.get('/new-entry', appTareasController.getNewEntry);

router.post('/new-entry', (request, response, next) => {
    if(!request.body.title || !request.body.body){
        response.send(400).send('Entradas deben tener un titulo y un cuerpo');
    }

    let newEntry = {
        title: request.body.title,
        content: request.body.body,
        published: new Date()
    };

    
    entries.push(newEntry);

    response.redirect('/appTareas');

    
});








module.exports = router;