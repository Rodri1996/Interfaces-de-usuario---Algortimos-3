
import { Component } from '@angular/core'
import { RutinaService } from '../../app/services/rutinaService/rutina.service'
import { Ejercicio } from 'src/domain/Ejercicios/ejercicio'
import { EjercicioService } from '../../app/services/ejercicioService/ejercicio.service'

import { ActivatedRoute, Router } from '@angular/router'
import { Rutina } from 'src/domain/Rutina/rutina'
import {CRITERIOS_EDICION} from 'src/domain/CriterioDeEdicion/criterioDeEdicion'


@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent {
 
  criteriosDeEdicion = CRITERIOS_EDICION
  rutina!:Rutina 
  rutinasConocidas!:Rutina[]

  constructor(private rutinaService:RutinaService,private router:Router,private rutaEnviada:ActivatedRoute,
    private ejercicioService:EjercicioService) {
    this.rutaEnviada.params.subscribe(parametro=>{
      const idNumerico = parametro['id'] as number
      this.rutina = this.rutinaService.trearRutina(idNumerico) as Rutina
    })
  }
  
  validarRutina(){
      this.rutina.validarCampos()
  }

  redirigirCancelar(){
    
  }

  sumarEjercicio(){
    this.router.navigate(['/ejercicio/:'+ this.rutina.id])
  }

  eliminarEjercicio(unEjercicio:Ejercicio){
    this.rutina.eliminarEjercicio(unEjercicio)
  }

}

