export class Usuario {
    constructor() {
        this.nombre = ''
        this.fecha = '10/10/2015'
        this.username = ''
    }

    static fromJson(usuarioJSON) {
        const usuarioActual = Object.assign(new Usuario(),
            usuarioJSON, {}
        )
        return usuarioActual
    }
}