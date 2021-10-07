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
    try{
      this.validarCampos()
      this.router.navigate(['/busquedaRutinas'])
    }catch(error:any){
      alert(error.message)
    } 
  }

  validarCampos():void{
    if(this.usuario === "") {
      throw Error("El usuario es obligatorio") 
    }else if (this.password === ""){
      throw Error("La contraseña es obligatoria")
    }
  }
}
