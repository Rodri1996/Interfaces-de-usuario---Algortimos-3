import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Actividad, ACTIVIDADES } from 'src/domain/Actividad/actividad'
import { Ejercicio } from 'src/domain/Ejercicios/ejercicio'
import { Rutina } from 'src/domain/Rutina/rutina'
import { ActividadesService } from 'src/service/actividades.service'
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

  constructor(private rutinaService:RutinaService,private router:Router,private actividadesService:ActividadesService,private rutaRecibida:ActivatedRoute){
    this.rutaRecibida.params.subscribe(params=>{
      this.rutina = this.rutinaService.trearRutina(params['id']) as Rutina
    })
  }

  ngOnInit():void{
    this.actividadesConocidas = this.actividadesService.actividades
  }

  redirigirGuardar(){
    this.router.navigate(['/rutina'])
  }
  redirigirCancelar(){
    this.router.navigate(['/rutina'])
  }

}
