export class Usuario{

    nombre!:string
    apellido!:string

    constructor(public id?:number,public username?:string, public password?:string, public amigos:Usuario[]=[]){
        
    }

    agregarAmigo(seguidor1: Usuario) {
        this.amigos.push(seguidor1)
    }
}


export const USUARIO_CREADOR = new Usuario()
USUARIO_CREADOR.nombre = 'Evaristo'
USUARIO_CREADOR.apellido = 'Hurtado'