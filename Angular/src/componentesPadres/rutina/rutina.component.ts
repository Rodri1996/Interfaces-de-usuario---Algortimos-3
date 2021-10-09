import { GruposMusculares } from './../../../../Typescript/src/Grupos Musculares/gruposMusculares'
import { Component } from '@angular/core'
import { RutinaService } from 'src/services/rutina/rutina.service'
import { Ejercicio, EjercicioSimple } from 'src/domain/Ejercicios/ejercicio'
import { EjercicioService } from 'src/services/ejercicio/ejercicio.service'
import { Actividad } from 'src/domain/Actividad/actividad'
import { Router } from '@angular/router'
import { RUTINA, Rutina } from 'src/domain/Rutina/rutina'
import {CRITERIOS_EDICION} from 'src/domain/CriterioDeEdicion/criterioDeEdicion'


@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent {
  nombreRutina!:string
  descripcionRutina!:string
  estrategiaDeEdicion!:string
 
  criteriosDeEdicion = CRITERIOS_EDICION
  rutina!:Rutina 

  constructor(private rutinaService:RutinaService,private router:Router) {
    this.rutina = RUTINA
  }
  
  redirigirGuardar(){
    this.router.navigate(['/rutina'])
  }
  redirigirCancelar(){
    this.router.navigate(['/rutina'])
  }

  sumarEjercicio(){
    this.router.navigate(['/ejercicio'])
  }
}

