import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Actividad, ACTIVIDADES } from 'src/domain/Actividad/actividad'
import { ActividadesService } from 'src/service/actividades.service'

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

  constructor(private router:Router,private actividadesService:ActividadesService){
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
