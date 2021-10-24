import { GruposMusculares } from 'src/domain/Grupos Musculares/gruposMusculares'

type DiaDeEntrenamiento = {
	nombre:Dias,
	minutosDeEntrenamiento:number	
}
export class Usuario{

    nombre!:string
    apellido!:string

    constructor(public id?:number,public username="", 
    public password?:string,
    public gruposMuscularesDePreferencia:GruposMusculares[]=[], 
    //public diasDeLaSemana:Dias[]=[], 
    public amigos:Usuario[]=[],
    public datos="",
    public frecuencia="", 
    public fecha?:Date,
    public porcentaje="", 
    public diasDeEntrenamiento:DiaDeEntrenamiento[]=[]){
        
    }

    agregarAmigo(seguidor1: Usuario) {
        this.amigos.push(seguidor1)
    }
}

export const USUARIO_CREADOR = new Usuario()
USUARIO_CREADOR.nombre = 'Evaristo'
USUARIO_CREADOR.apellido = 'Hurtado'

export enum Dias{
    lunes="L",
    martes="M",
    miercoles="M",
    jueves="J",
    viernes="V",
    sabado="S",
    domingo="D"
  }