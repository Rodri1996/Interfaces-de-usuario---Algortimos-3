export class Rutina {
    constructor() {
        this.nombre = ''
        this.autor = 'Placeholderio Sampletextio'
        this.descripcion = ''
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