const Entry = require('../models/newEntry');

//COPIAAAAAAAAAAAA//
exports.getEntry = (request, response, next) => {
    const id = request.params.entry_id;
    Entry.fetchOne(id)
        .then(([rows, fieldData]) => {
            const entries = [];
            for (let tarea of rows) {
            entries.push({title: tarea.titulo, content: tarea.contenido, published: tarea.fecha_creacion, imagen: tarea.imagen});
            //console.log(tarea.titulo);
            
        }
        console.log(entries);
        response.render('index', {
            title: 'Inicio',
            NuevaEntrada: entries,
            isLoggedIn: request.session.isLoggedIn,
            entries: entries // Pasar entries como variable local a la vista
        });
    })
    .catch(err => {
        console.log(err);
    });
   

}
//COPIAAAAAAAAAAAA//

exports.get = (request, response, next) => {

    console.log('Cookie: ' + request.get('Cookie'));

    //Con cookie parser
    console.log(request.cookies);
    console.log(request.cookies.ultima_tarea);

    Entry.fetchAll()
        .then(([rows, fieldData]) => {
            const entries = [];
            for (let tarea of rows) {
            entries.push({title: tarea.titulo, content: tarea.contenido, published: tarea.fecha_creacion, imagen: tarea.imagen});
            //console.log(tarea.titulo);
            
        }
        console.log(entries);
        response.render('index', {
            title: 'Inicio',
            NuevaEntrada: entries,
            isLoggedIn: request.session.isLoggedIn,
            entries: entries // Pasar entries como variable local a la vista
        });
    })
    .catch(err => {
        console.log(err);
    });
   

}

exports.getNewEntry = (request, response, next) => {
    response.render('new-entry', {
        title: 'Nueva entrada',
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
    
}

exports.postNewEntry = (request, response, next) => {
    if(!request.body.title || !request.body.body){
        response.send(400).send('Entradas deben tener un titulo y un cuerpo');
    }


    let newEntry = {
        title: request.body.title,
        content: request.body.body,
        published: new Date(),
        imagen: request.file.filename,
    };

    // Utiliza el modelo Entry para guardar la nueva entrada
    const entryModel = new Entry(newEntry);
    entryModel.save()
    .then(() => {
        return response.redirect('/appTareas');
    }).catch((error) => {
        console.log(error);
        response.redirect('/users/login')
    });


}





