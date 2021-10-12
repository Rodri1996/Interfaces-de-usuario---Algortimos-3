import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Actividad, ACTIVIDADES } from 'src/domain/Actividad/actividad'
import { Ejercicio, EJERCICIO_3 } from 'src/domain/Ejercicios/ejercicio'
import { Rutina } from 'src/domain/Rutina/rutina'
import { ActividadesService } from 'src/service/actividades.service'
import { EjercicioService } from 'src/services/ejercicio/ejercicio.service'
import { RutinaService } from 'src/services/rutina/rutina.service'

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
  ejercicio!:Ejercicio

  rutina!:Rutina

  constructor(private rutinaService:RutinaService,private router:Router,private actividadesService:ActividadesService,private rutaRecibida:ActivatedRoute,private ejercicioService:EjercicioService){
    this.rutaRecibida.params.subscribe(params=>{
      this.rutina = this.rutinaService.trearRutina(params['id']) as Rutina
    })
  }

  ngOnInit():void{
    this.actividadesConocidas = this.actividadesService.actividades
  }

  crearEjercicio(){
    const ejercicioSimple = this.ejercicioService.crearEjercicio(this.actividadElegida,this.minutosDeDescanso,this.frecuenciaCardBase,this.cantidadDeSeries)
    // this.ejercicioService.agregarEjercicio(ejercicioSimple)
    // this.inicializarCampos()
    // this.rutina.agregarEjercicio(ejercicioSimple)
    this.rutina.agregarEjercicio(ejercicioSimple)
    this.router.navigate(['/rutina/:'+ this.rutina.id])
  }

  inicializarCampos() {
    this.minutosDeDescanso = 0
    this.frecuenciaCardBase = 0
    this.cantidadDeSeries = 0
  }

  redirigirCancelar(){
    this.router.navigate(['/rutina/:' + this.rutina.id])
  }

}
