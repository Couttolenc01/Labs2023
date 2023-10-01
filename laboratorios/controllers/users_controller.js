const Usuario = require('../models/user');

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

exports.getRegister = (request, response, next) => {
    response.render('register', {
        title: 'Registro',
        isLoggedIn: request.session.isLoggedIn
    });
};

exports.postRegister = (request, response, next) => {
    const nuevoUsuario = new Usuario(request.body.nombre, request.body.username, request.body.password);
    nuevoUsuario.save()
    .then(() => {
        response.redirect('/appTareas');
    }).catch((err) => {
        console.log(err);
        response.redirect('/users/register');
    });
}
