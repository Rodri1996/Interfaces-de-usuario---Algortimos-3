import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/domain/Actividad/actividad';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent implements OnInit {

  actividades!:Actividad[]

  constructor() { }

  ngOnInit() {
    this.actividades=[(new Actividad(new Set(),"Piernas"))]
  }

}
