import { GruposMusculares } from './../../../../Typescript/src/Grupos Musculares/gruposMusculares'
import { Component } from '@angular/core'
import { RutinaService } from 'src/services/rutina/rutina.service'
import { Ejercicio, EjercicioSimple } from 'src/domain/Ejercicios/ejercicio'
import { EjercicioService } from 'src/services/ejercicio/ejercicio.service'
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
  nombreRutina!:string
  descripcionRutina!:string
  estrategiaDeEdicion!:CriterioDeEdicion
 
  criteriosDeEdicion = CRITERIOS_EDICION
  rutina!:Rutina 
  rutinasConocidas!:Rutina[]
  
  mensajesErroneos:MensajeErroneo[]=[]

  constructor(private rutinaService:RutinaService,private router:Router,private rutaEnviada:ActivatedRoute) {
    this.rutaEnviada.params.subscribe(parametro=>{
      this.rutina = this.rutinaService.trearRutina(parametro['id']) as Rutina
    })
  }
  
  editarRutina(){
      this.validarRutina()
      if(this.mensajesErroneos.length <= 0){
        this.rutina.nombreRutina = this.nombreRutina
        this.rutina.descripcion = this.descripcionRutina 
        this.rutina.criterioDeEdicion = this.estrategiaDeEdicion 
      }
  }

  validarRutina(){
    this.mensajesErroneos.length = 0
    if(!this.nombreRutina){
      this.añadirError('campoNombre','Debe ingresar un nombre para la rutina')
    }
    if(!this.descripcionRutina){
      this.añadirError('campoDescripcion','Debe ingresar una descripcion')
    }
    if(!this.estrategiaDeEdicion){
      this.añadirError('campoCriterioEdicion','Debe ingresar una descripcion')
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

  redirigirCancelar(){
    // this.router.navigate(['/rutina'])
  }

  sumarEjercicio(){
    this.router.navigate(['/ejercicio/:'+ this.rutina.id])
  }
}

class MensajeErroneo{

  constructor(public campo:string,public mensaje:string){

  }
}