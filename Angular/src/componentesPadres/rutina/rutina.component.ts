import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent implements OnInit {

  nombreRutina!:String 
  creadorRutina:String = "Por "

  constructor() { 
    console.log('Rutina Test')
  }

  ngOnInit() {
  }

}
