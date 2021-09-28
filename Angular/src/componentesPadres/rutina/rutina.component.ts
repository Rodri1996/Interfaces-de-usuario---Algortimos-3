import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent {

  nombreRutina!:string 
  creadorRutina!:string 

  constructor() { 
    console.log('Rutina Test')
  }

    
  }

