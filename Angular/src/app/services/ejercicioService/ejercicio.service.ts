import { Injectable } from '@angular/core';
import { Actividad } from 'src/domain/Actividad/actividad';
import { Ejercicio, EjercicioSimple } from 'src/domain/Ejercicios/ejercicio';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {
  
  unId:number = 0
  ejercicios:Ejercicio[]=[]
  
  constructor() { }
  
  crearEjercicio(actividadElegida: Actividad, minutosDeDescanso: number, frecuenciaCardBase: number, cantidadDeSeries: number) {
    const ejercicioSimple = new EjercicioSimple(1,frecuenciaCardBase,minutosDeDescanso,actividadElegida)
    this.asignarIdentificador(ejercicioSimple)
    return ejercicioSimple
  }
  
  asignarIdentificador(ejercicio:EjercicioSimple){
    ejercicio.id = this.unId
    this.unId +=1
  }

  // agregarEjercicio(ejercicio: EjercicioSimple) {
  //   this.ejercicios.push(ejercicio)
  // }
}
