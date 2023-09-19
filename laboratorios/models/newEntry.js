

const db = require('../util/database');

module.exports = class Entry {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(entry) {
        this.title = entry.title || '';
        this.content = entry.content || '';
        this.published = entry.published || '';
        this.imagen = entry.imagen || '';
        
       
        
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {

        return db.execute('INSERT INTO tareas(titulo, contenido, fecha_creacion, imagen) VALUES (?, ? ,?, ?)',
        [this.title, this.content, this.published, this.imagen]
    );
        //entries.push(this.entry);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM tareas');
            
        
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM tareas WHERE id = ?', [id]);
            
        
    }

}