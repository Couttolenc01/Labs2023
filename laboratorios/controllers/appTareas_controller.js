const entries = [];

exports.get = (request, response, next) => {
    response.render('index', {
        title: 'Inicio',
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

    
    entries.push(newEntry);

    response.redirect('/appTareas');

    
}


