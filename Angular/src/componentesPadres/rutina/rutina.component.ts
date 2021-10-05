import { GruposMusculares } from './../../../../Typescript/src/Grupos Musculares/gruposMusculares'
import { Component } from '@angular/core'


@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent {

  nombreRutina:string 
  creadorRutina:string = "Por " 
  gruposMusculares!:GruposMusculares[]

  constructor() {
    this.nombreRutina = "Brazos"
    this.creadorRutina += "Juan Perez" 
    this.gruposMusculares=[GruposMusculares.abdomen, 
                            GruposMusculares.pecho, 
                            GruposMusculares.gluteos, 
                            GruposMusculares.piernas, 
                            GruposMusculares.hombros, 
                            GruposMusculares.brazos, 
                            GruposMusculares.espalda]
    
  }

    
  }

