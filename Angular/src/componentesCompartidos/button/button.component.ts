import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {

  @Input() placeholder!:string 
  @Input() estilo!:string

  saludo(){
    console.log("hola")
  }
}
