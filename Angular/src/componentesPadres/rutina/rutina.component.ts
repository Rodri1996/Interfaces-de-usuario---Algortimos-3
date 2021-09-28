import { GruposMusculares } from './../../../../Typescript/src/Grupos Musculares/gruposMusculares';
import { Component, Input, OnInit } from '@angular/core'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    this.gruposMusculares=[GruposMusculares.abdomen]
  }

    
  }

