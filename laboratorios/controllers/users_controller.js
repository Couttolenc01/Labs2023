exports.getLogin = (request, response, next) => {
    response.render('login', {
        title: 'Iniciar sesión',
        isLoggedIn: request.session.isLoggedIn
    });
     
};

exports.postLogin = (request, response, next) => {
    request.session.isLoggedIn = true;
    request.session.usuario = request.body.usuario;
    response.redirect('/appTareas');

};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};
