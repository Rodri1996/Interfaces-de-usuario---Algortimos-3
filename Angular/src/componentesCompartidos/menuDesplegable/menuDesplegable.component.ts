import { Component, Input, OnInit } from '@angular/core'
import { Actividad } from 'src/domain/Actividad/actividad'
import { GruposMusculares } from 'src/domain/Grupos Musculares/gruposMusculares'

@Component({
  selector: 'app-menuDesplegable',
  templateUrl: './menuDesplegable.component.html',
  styleUrls: ['./menuDesplegable.component.css']
})
export class MenuDesplegableComponent {

  actividades!:Actividad[]

  constructor() {
    this.actividades=[
      (new Actividad(new Set(),"Abdominales")),
      (new Actividad(new Set(),"Flexiones de brazos")),
      (new Actividad(new Set(),"Correr"))
    ]
  }

}
