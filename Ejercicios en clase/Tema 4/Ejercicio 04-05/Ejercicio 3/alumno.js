class Alumno {
    constructor(nombre, apellidos, id, nombreModulos, notasModulos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.id = id;
        this.nombreModulos = nombreModulos;
        this.notasModulos = notasModulos;
    }

    getNombre() {
        return this.nombre;
    }

    getApellidos() {
        return this.apellidos;
    }

    getId() {
        return this.id;
    }

    getNombreModulos() {
        return this.nombreModulos;
    }

    getNotasModulos() {
        return this.notasModulos;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }

    setId(id) {
        this.id = id;
    }

    setNombreModulos(nombreModulos) {
        this.nombreModulos = nombreModulos;
    }

    setNotasModulos(notasModulos) {
        this.notasModulos = notasModulos;
    }

    mostrarModulos() {
        return this.nombreModulos.join(", ");
    }

    nota(nombreModulo) {
        const index = this.nombreModulos.indexOf(nombreModulo);
        if (index === -1) {
            return "Módulo no encontrado";
        }
        return this.notasModulos[index];
    }

    media() {
        let suma = 0;
        for (let i = 0; i < this.notasModulos.length; i++) {
            suma += this.notasModulos[i];
        }
        return suma / this.notasModulos.length;
    }

    suspensas() {
        let suspensas = [];
        for (let i = 0; i < this.notasModulos.length; i++) {
            if (this.notasModulos[i] < 5) {
                suspensas.push(this.nombreModulos[i]);
            }
        }
        return suspensas;
    }

    aprobadas() {
        let aprobadas = [];
        for (let i = 0; i < this.notasModulos.length; i++) {
            if (this.notasModulos[i] >= 5) {
                aprobadas.push(this.nombreModulos[i]);
            }
        }
        return aprobadas;
    }
}