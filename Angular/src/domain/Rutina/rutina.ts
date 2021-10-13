import { GLUTEOS } from '../Actividad/actividad'
import { CriterioDeEdicion, FREE } from '../CriterioDeEdicion/criterioDeEdicion'
import {
  Ejercicio,
  EJERCICIO_1,
  EJERCICIO_2,
  EJERCICIO_3
} from '../Ejercicios/ejercicio'
import { GruposMusculares } from '../Grupos Musculares/gruposMusculares'
import { Usuario, USUARIO_CREADOR } from '../Usuario/usuario'

class MensajeErroneo{

    constructor(public campo:string,public mensaje:string){
  
    }
}
export class Rutina {
  ejercicios: Ejercicio[] = []
  criterioDeEdicion: CriterioDeEdicion = FREE
  descripcion!: string
  id: number = 0
  mensajesErroneos:MensajeErroneo[]=[]

  constructor(public creador: Usuario, public nombreRutina: string) {}

  duracion(): number {
    return this.ejercicios.reduce(
      (acum, ejercicio) => acum + ejercicio.duracion(),
      0
    )
  }

  frecuenciaCardiacaBase(): number {
    if (!this.hayEjercicios())
      throw Error(
        'No se puede calcular frecuencia cardiaca base porque no tengo ejercicios'
      )
    return (
      this.ejercicios.reduce(
        (acum, ejercicio) => acum + ejercicio.frecuenciaCardiacaBase,
        0
      ) / this.ejercicios.length
    )
  }

  hayEjercicios(): boolean {
    return this.ejercicios.length > 0
  }

  // gruposMuscularesQueEntrena():Set<GruposMusculares>{
  //     return new Set(this.ejercicios.map(unEjercicio => unEjercicio.gruposMuscularesQueEntrena()));
  // }

  gruposMuscularesQueEntrena(): string[] {
    return ['Piernas', 'Brazos', 'Hombros']
  }

  agregarEjercicio(unEjercicio: Ejercicio): void {
    this.ejercicios.push(unEjercicio)
  }

  // esEditable(unUsuario:Usuario){
  //     return this.creador == unUsuario || this.unCriterioDeEdicion.rutinaPuedeSerEditadaPor(unUsuario, this);
  // }

  validarCampos() {
    this.mensajesErroneos.length = 0
    if (!this.nombreRutina) {
      this.añadirError('campoNombre', 'Debe ingresar un nombre para la rutina')
    }
    if (!this.descripcion) {
      this.añadirError('campoDescripcion', 'Debe ingresar una descripcion')
    }
  }

  añadirError(campo:string,mensaje:string) {
    this.mensajesErroneos.push(new MensajeErroneo(campo,mensaje))
  }

  tieneMensajesErroneos(campo:string):boolean{
    return this.mensajesErroneos.some((error)=>error.campo == campo)
  }

  erroresSobre(campo:string){
    return this.mensajesErroneos.filter((error)=> error.campo == campo).map((error)=>error.mensaje).join(". ")
  }
}

const unNombre = 'Isquitibiales'

export const RUTINA = new Rutina(USUARIO_CREADOR, unNombre)
RUTINA.ejercicios = [EJERCICIO_1, EJERCICIO_2, EJERCICIO_3]
RUTINA.descripcion = 'Esta es una rutina sabrosa'
// RUTINA.agregarEjercicio(EJERCICIO_1)
// RUTINA.agregarEjercicio(EJERCICIO_2)
// RUTINA.agregarEjercicio(EJERCICIO_3)
