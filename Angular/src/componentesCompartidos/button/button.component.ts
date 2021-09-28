import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {

  @Input() nombreBoton!:string 
  @Input() estilo!:string
  @Input() onClick!:() => void
  
}

/*Lo del boton no entendi eso de que el padre redirija*/





