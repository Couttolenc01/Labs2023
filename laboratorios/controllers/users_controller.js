const Usuario = require('../models/user');
const bcrypt = require('bcryptjs');

exports.getLogin = (request, response, next) => {
    response.render('login', {
        title: 'Iniciar sesión',
        error: request.session.error,
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
     
};

exports.postLogin = (request, response, next) => {
    request.session.error = null;
    const username = request.body.username;
    Usuario.fetchOne(username)
        .then(([rows, fieldData]) => {
            if (!rows || rows.length === 0) {
                request.session.error = 'Usuario y/o contraseña son incorrectos';
                // User not found in the database
                return response.redirect('/users/login');
            }

            bcrypt.compare(request.body.password, rows[0].password)
                .then(doMatch => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.usuario = request.body.usuario;
                        return request.session.save(err => {
                            response.redirect('/appTareas');
                        });
                    }
                    request.session.error = 'Usuario y/o contraseña son incorrectos';
                    response.redirect('/users/login');
                })
                .catch(err => {
                    request.session.error = 'Usuario y/o contraseña son incorrectos';
                    response.redirect('/users/login');
                });
        });
};



exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.getRegister = (request, response, next) => {
    response.render('register', {
        title: 'Registro',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.postRegister = (request, response, next) => {
    const nuevoUsuario = new Usuario(request.body.nombre, request.body.username, request.body.password);
    nuevoUsuario.save()
    .then(() => {
        request.session.isLoggedIn = true;
        request.session.usuario = request.body.usuario;
        response.redirect('/appTareas');
    }).catch((err) => {
        console.log(err);
        response.redirect('/users/register');
    });
}
