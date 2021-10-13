import { GruposMusculares } from './../../../../Typescript/src/Grupos Musculares/gruposMusculares'
import { Component } from '@angular/core'
import { RutinaService } from '../../app/services/rutinaService/rutina.service'
import { Ejercicio, EjercicioSimple } from 'src/domain/Ejercicios/ejercicio'
import { EjercicioService } from '../../app/services/ejercicioService/ejercicio.service'
import { Actividad } from 'src/domain/Actividad/actividad'
import { ActivatedRoute, Router } from '@angular/router'
import { RUTINA, Rutina } from 'src/domain/Rutina/rutina'
import {CriterioDeEdicion, CRITERIOS_EDICION, FREE} from 'src/domain/CriterioDeEdicion/criterioDeEdicion'


@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent {
 
  criteriosDeEdicion = CRITERIOS_EDICION
  rutina!:Rutina 
  rutinasConocidas!:Rutina[]

  constructor(private rutinaService:RutinaService,private router:Router,private rutaEnviada:ActivatedRoute) {
    this.rutaEnviada.params.subscribe(parametro=>{
      const idNumerico = parametro['id'] as number
      this.rutina = this.rutinaService.trearRutina(idNumerico) as Rutina
    })
  }
  
  validarRutina(){
      this.rutina.validarCampos()
  }

  redirigirCancelar(){
    // this.router.navigate(['/rutina'])
  }

  sumarEjercicio(){
    this.router.navigate(['/ejercicio/:'+ this.rutina.id])
  }
}

