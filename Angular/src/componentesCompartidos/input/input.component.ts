import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() placeholder!:string
  placeholderInput(nombre:string){
    this.placeholder=nombre
}
}
