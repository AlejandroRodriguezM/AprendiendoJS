class AlumnoFPDual extends AlumnoFP {
    constructor(nombre, apellidos, id, modulos, notasModulos, empresaFCT, empresaFCTDual) {
        super(nombre, apellidos, id, modulos, notasModulos, empresaFCT);
        this.empresaFCTDual = empresaFCTDual;
    }

    hacerFCTDual(empresa) {
        this.empresaFCTDual = empresa;
    }
}