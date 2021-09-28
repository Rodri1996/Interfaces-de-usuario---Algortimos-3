import { GruposMusculares } from './../../../../Typescript/src/Grupos Musculares/gruposMusculares'
import { Component } from '@angular/core'


@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent {

  nombreRutina!:string 
  creadorRutina!:string 
  gruposMusculares!:GruposMusculares[]

  constructor() { 
    // console.log('Rutina Test')
    this.gruposMusculares=[GruposMusculares.abdomen, 
                            GruposMusculares.pecho, 
                            GruposMusculares.gluteos, 
                            GruposMusculares.piernas, 
                            GruposMusculares.hombros, 
                            GruposMusculares.brazos, 
                            GruposMusculares.espalda]
    
  }

    
  }

