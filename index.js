class Usuario {
    constructor(nombre, apellido, libro, mascota) {
        this.nombre = String(nombre);
        this.apellido = String(apellido);
        this.libros = [{nombre: libro.nombre, autor: libro.autor}];
        this.mascotas = [String(mascota)];
    }

    getFullName() {
        return `Nombre: ${this.nombre}\nApellido: ${this.apellido}`
    }

    addMascota(mascotaNueva) {
        this.mascotas.push(String(mascotaNueva));
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(a,b) {
        this.libros.push({nombre: a, autor: b});   
    }

    getBookNames() { 
        return this.libros.map((x) => x.nombre);
    }
}

const usuario = new Usuario('Facundo', 'Ezequiel', {nombre: 'El señor de los anillos', autor: 'Tolkien'}, 'Garfield');
usuario.getFullName();
usuario.addMascota('Firu');
usuario.countMascotas();
usuario.addBook('Las aventuras de Tom Sawyer', 'Mark Twain');
usuario.addBook('El necronomicon', 'Lovercraft');
usuario.getBookNames();
