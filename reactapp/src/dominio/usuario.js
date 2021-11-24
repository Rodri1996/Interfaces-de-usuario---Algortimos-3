export class Usuario {
    constructor() {
        this.id = 0
        this.nombre = ''
        this.fecha = '10/10/2015'
        this.username = ''
        this.password =""
        this.foto = ""
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

    static fromJson2(usuario){
        const usuarioPosteado = Object.assign(
            new Usuario(),
            usuario,
            { foto:usuario.foto }
        )
        return usuarioPosteado
    }
}