import { GruposMusculares } from 'src/domain/Grupos Musculares/gruposMusculares'

type DiaDeEntrenamiento = {
	nombre:Dias,
	minutosDeEntrenamiento:number	
}
export class Usuario{

    public nombre!:string
    public apellido!:string
    constructor(public id?:number,public username="", 
    public password?:string,
    public gruposMuscularesDePreferencia:GruposMusculares[]=[], 
    public posiblesAmigos:Usuario[]=[], 
    public listaDeAmigos:Usuario[]=[],
    public datos="",
    public frecuencia="", 
    public fecha?:Date,
    public porcentaje="", 
    public diasDeEntrenamiento:DiaDeEntrenamiento[]=[]){
        
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