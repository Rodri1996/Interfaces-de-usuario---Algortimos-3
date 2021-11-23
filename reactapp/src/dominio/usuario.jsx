export class Usuario {
    constructor() {
        this.nombre = ''
        this.fecha = '10/10/2015'
        this.username = ''
        this.password =""
    }

    static fromJson(usuarioJSON) {
        const usuarioActual = Object.assign(
            new Usuario(),
            usuarioJSON, 
            {}
        )
        return usuarioActual
    }

    static toJson(username,password){
        return {
            username:username,
            password:password
        }
    }
}