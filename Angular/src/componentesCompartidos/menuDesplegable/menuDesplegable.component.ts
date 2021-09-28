import { Component, Input, OnInit } from '@angular/core';
import { Actividad } from 'src/domain/Actividad/actividad';
import { GruposMusculares } from 'src/domain/Grupos Musculares/gruposMusculares';

@Component({
  selector: 'app-menuDesplegable',
  templateUrl: './menuDesplegable.component.html',
  styleUrls: ['./menuDesplegable.component.css']
})
export class MenuDesplegableComponent implements OnInit {

  @Input() actividad!:Actividad

  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
