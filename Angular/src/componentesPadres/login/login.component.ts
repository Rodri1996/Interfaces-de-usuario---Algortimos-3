import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UsuarioService } from 'src/service/usuario.service'
import swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario=""
  password= ""

  constructor(private router:Router, public usuarioService:UsuarioService){}

 async redirigir(){
    try{
      this.validarCampos()
      const usuarioLogueado=await this.usuarioService.loguearUsuario(this.usuario,this.password)
      this.router.navigate(['/busquedaRutinas'])
    }catch(error:any){
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
