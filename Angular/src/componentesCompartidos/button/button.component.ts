import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {

  @Input() nombreBoton!:string 
  @Input() estilo!:string
  @Input() onClick!:() => void
  @Input() redirigir!:string

  constructor(private router:Router){
    
  }

  redirigirFN(){
    this.router.navigate([this.redirigir])
  }
  
}

/*Lo del boton no entendi eso de que el padre redirija*/





