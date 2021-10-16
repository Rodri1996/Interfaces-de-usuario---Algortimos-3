import { GruposMusculares } from 'src/domain/Grupos Musculares/gruposMusculares'
export class Usuario{

    nombre!:string
    apellido!:string

    constructor(public id?:number,public username="", public password?:string,public gruposMuscularesDePreferencia:GruposMusculares[]=[], public amigos:Usuario[]=[],public datos="",public frecuencia="", public fecha?:Date,public porcentaje=""){
        
    }

    agregarAmigo(seguidor1: Usuario) {
        this.amigos.push(seguidor1)
    }
}


export const USUARIO_CREADOR = new Usuario()
USUARIO_CREADOR.nombre = 'Evaristo'
USUARIO_CREADOR.apellido = 'Hurtado'