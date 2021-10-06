import { Injectable } from '@angular/core';
import { Actividad } from 'src/domain/Actividad/actividad';
import { Ejercicio, EjercicioSimple } from 'src/domain/Ejercicios/ejercicio';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

constructor() { }

  traerEjercicios(){
    return new EjercicioSimple(1,1,1,new Actividad(new Set(),"unaActividad"))
  }
}
