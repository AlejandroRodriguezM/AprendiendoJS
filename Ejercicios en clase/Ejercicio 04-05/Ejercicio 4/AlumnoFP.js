class AlumnoFP extends Alumno {
    constructor(nombre, apellidos, id, modulos, notasModulos, empresaFCT) {
        super(nombre, apellidos, id, modulos, notasModulos);
        this.empresaFCT = empresaFCT;
    }

    hacerFCT(empresa) {
        this.empresaFCT = empresa;
    }
}