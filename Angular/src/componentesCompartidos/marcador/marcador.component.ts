import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent {

  @Input() nombreMarcador!:string


  // constructor() { }

  // ngOnInit() {
  // }

}
