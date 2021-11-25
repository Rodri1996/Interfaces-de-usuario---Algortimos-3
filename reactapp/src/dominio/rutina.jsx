export class Rutina {
    constructor() {
        this.nombre = ''
        this.autor = ''
        this.descripcion = ''
        this.id = 0
    }

    static fromJson(rutinaJSON) {
        const rutinaActual = Object.assign(
            new Rutina(),
            rutinaJSON, 
            {}
        )
        return rutinaActual
    }
}