import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent {

  @Input() placeholder!:string

  nombreRutina!:string 
  creadorRutina!:string 

  constructor() { 
    console.log('Rutina Test')
  }

  placeholderInput(nombre:string){
    this.placeholder=nombre
  }

  

}
