import { Injectable } from '@angular/core';
import { Actividad, PIERNAS } from 'src/domain/Actividad/actividad';
import { Ejercicio, EjercicioCompuesto, EjercicioSimple } from 'src/domain/Ejercicios/ejercicio';
import { RUTINA } from 'src/domain/Rutina/rutina';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {
  
  unId:number = 0
  ejerciciosTraidos:Ejercicio[]=[]
  
  constructor() {
    const piernas = this.crearEjercicioSimple(PIERNAS,5,80,10)
    this.ejerciciosTraidos.push(piernas)
    RUTINA.ejercicios = this.ejerciciosTraidos
  }
  
  crearEjercicioSimple(actividadElegida: Actividad, minutosDeDescanso: number, frecuenciaCardBase: number, minutosDeTrabajo: number) {
    const ejercicioSimple = new EjercicioSimple(minutosDeTrabajo,frecuenciaCardBase,minutosDeDescanso,actividadElegida)
    this.asignarIdentificador(ejercicioSimple)
    return ejercicioSimple
  }
  
  // (private serie:number,frecuenciaCardiacaBase:number,minutosDeDescanso:number,unaActividad:Actividad){
  //   super(frecuenciaCardiacaBase,minutosDeDescanso,unaActividad)
  crearEjercicioCompuesto(cantidadDeSeries: number, frecuenciaCardBase: number, minutosDeDescanso: number, actividadElegida: Actividad) {
      const ejercicioCompuesto = new EjercicioCompuesto(cantidadDeSeries,frecuenciaCardBase,minutosDeDescanso,actividadElegida)
      this.asignarIdentificador(ejercicioCompuesto)
      return ejercicioCompuesto
  }

  asignarIdentificador(ejercicio:Ejercicio){
    ejercicio.id = this.unId
    this.unId = this.unId + 1
  }
}
