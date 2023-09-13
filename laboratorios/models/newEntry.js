

const db = require('../util/database');

module.exports = class Entry {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(entry) {
        this.entry = entry;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        entries.push(this.entry);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM tareas');
            
        
    }

}