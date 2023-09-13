const Entry = require('../models/newEntry');


exports.get = (request, response, next) => {
    const entries = Entry.fetchAll();

    console.log('Cookie: ' + request.get('Cookie'));
   

    response.render('index', {
        title: 'Inicio',
        NuevaEntrada: entries,
        entries: entries // Pasar entries como variable local a la vista
    });
}

exports.getNewEntry = (request, response, next) => {
    response.render('new-entry', {
        title: 'Nueva entrada'
    });
    
}

exports.postNewEntry = (request, response, next) => {
    if(!request.body.title || !request.body.body){
        response.send(400).send('Entradas deben tener un titulo y un cuerpo');
    }

    let newEntry = {
        title: request.body.title,
        content: request.body.body,
        published: new Date()
    };

    // Utiliza el modelo Entry para guardar la nueva entrada
    const entryModel = new Entry(newEntry);
    entryModel.save();

    response.setHeader('Set-Cookie', 'ultima_tarea='+ newEntry.title);

    response.redirect('/appTareas');

    
}


