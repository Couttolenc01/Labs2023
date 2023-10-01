

const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class User {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, username, password) {
        this.nombre = nombre || '';
        this.username = username || '';
        this.password = password|| '';
        
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {

        //Hashea la contraseña antes de guardarla en la base de datos
        return bcrypt.hash(this.password, 12)
        .then((hash) => {

            return db.execute('INSERT INTO usuarios(username, nombre, password) VALUES (?, ? ,?)',
            [this.username, this.nombre, hash]
        );
        }).catch(err => {
            console.log(err);
        });
        
    }

    /*
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM tareas');
            
        
    }
    */

    static fetchOne(username, password) {
        return db.execute('SELECT * FROM usuarios WHERE username = ? AND password = ?', [username, password]);
            
        
    }

}