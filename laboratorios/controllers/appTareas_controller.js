const entries = [];

exports.get = (request, response, next) => {
    response.render('index', {
        title: 'Inicio',
        entries: entries // Pasar entries como variable local a la vista
    });
}