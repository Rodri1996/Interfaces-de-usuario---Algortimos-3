import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){
    console.log('Test: ' + this.router)
  }

  redirigir(){
    console.log('La ruta es: ' + this.router)
    this.router.navigate(['/rutinas2'])
  }

}
