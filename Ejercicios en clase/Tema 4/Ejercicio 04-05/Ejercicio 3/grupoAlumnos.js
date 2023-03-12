class GrupoAlumnos {
    constructor() {
        this.alumnos = []
    }
    matricular(alumno) {
        this.alumnos.push(alumno);
    }
    eliminar(alumno) {
        this.alumnos = this.alumnos.filter(a => a !== alumno);
    }
    numero() {
        return this.alumnos.length;
    }
    mostrar(id) {
        return this.alumnos.find(alumno => alumno.id === id);
    }
}