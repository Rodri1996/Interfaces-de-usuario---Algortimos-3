import { Component } from '@angular/core'
import { Router } from '@angular/router'
import swal from 'sweetalert2'


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
    }catch(error:any)
    {
      
      swal.fire('Oops...',error.message,'error')
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
