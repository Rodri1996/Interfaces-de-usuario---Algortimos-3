import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario=""
  password= ""

  constructor(private router:Router){}

  redirigir(){
    this.router.navigate(['/busquedaRutinas'])
  }




}
