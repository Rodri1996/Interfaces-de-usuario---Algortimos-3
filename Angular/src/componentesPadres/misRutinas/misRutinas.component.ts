import { Component, HostListener } from "@angular/core";


@Component({
  selector: 'app-misRutinas',
  templateUrl: './misRutinas.component.html',
  styleUrls: ['./misRutinas.component.css']
})
export class MisRutinasComponent {

  @HostListener('window:resize')
  pantallaMobile(){
    return window.innerWidth < 401 
  }

  constructor() { }

}
