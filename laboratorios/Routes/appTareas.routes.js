const express = require('express');

const router = express.Router();

let entries = [];
router.entries = entries;

router.get('/', (request, response, next) => {
    response.render('index', {
        title: 'Inicio'
    });
});


router.get('/new-entry', (request, response, next) => {
    response.render('new-entry', {
        title: 'Nueva entrada'
    });
    
});

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

    response.redirect('/');

    
});








module.exports = router;