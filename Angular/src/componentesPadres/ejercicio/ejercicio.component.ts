import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Actividad, ACTIVIDADES } from 'src/domain/Actividad/actividad'
import { Ejercicio, EJERCICIO_3 } from 'src/domain/Ejercicios/ejercicio'
import { Rutina } from 'src/domain/Rutina/rutina'
import { ActividadesService } from '../../app/services/actividadService/actividades.service'
import { EjercicioService } from '../../app/services/ejercicioService/ejercicio.service'
import { RutinaService } from '../../app/services/rutinaService/rutina.service'

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent implements OnInit{

  actividadesConocidas!:Actividad[]
  actividadElegida!:Actividad
  minutosDeDescanso!:number
  frecuenciaCardBase!:number
  cantidadDeSeries!:number
  minutosDeTrabajo!:number
  ejercicio!:Ejercicio

  checkMarcado:boolean = false

  rutina!:Rutina
  idRutina!:number

  constructor(private rutinaService:RutinaService,private router:Router,private actividadesService:ActividadesService,private rutaRecibida:ActivatedRoute,private ejercicioService:EjercicioService){
    this.rutaRecibida.params.subscribe(params => {
      this.idRutina = params['id']
    })
  }
  
  async ngOnInit(){
    this.rutina = await this.rutinaService.trearRutina(this.idRutina)
    this.actividadesConocidas = this.actividadesService.actividades
  }

  agregarEjercicio(){
    if(this.checkMarcado){
      const ejercicioCompuesto=this.crearEjercicioCompuesto()
      this.agregarEjercicioAlArray(ejercicioCompuesto)
    }else{
      const ejercicioSimple = this.crearEjercicioSimple()
      this.agregarEjercicioAlArray(ejercicioSimple)
    }
    this.router.navigate(['/rutina/:'+ this.idRutina])
  }
  
  crearEjercicioCompuesto(){
    return this.ejercicioService.crearEjercicioCompuesto(this.cantidadDeSeries,this.frecuenciaCardBase,this.minutosDeDescanso,this.actividadElegida)
  }
  
  crearEjercicioSimple(){
    return this.ejercicioService.crearEjercicioSimple(this.actividadElegida,this.minutosDeDescanso,this.frecuenciaCardBase,this.minutosDeTrabajo)
  }

  agregarEjercicioAlArray(unEjercicio:Ejercicio){
    this.rutina.agregarEjercicio(unEjercicio)
  }

  inicializarCampos() {
    this.minutosDeDescanso = 0
    this.frecuenciaCardBase = 0
    this.cantidadDeSeries = 0
  }

  redirigirCancelar(){
    this.router.navigate(['/rutina/:' + this.idRutina])
  }
}
