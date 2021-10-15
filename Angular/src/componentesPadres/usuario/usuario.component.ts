import { Component, Input, OnInit } from '@angular/core'
import { Usuario } from 'src/domain/Usuario/usuario'
import { UsuarioService } from '../../app/services/usuarioService/usuario.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{

  usuario!:Usuario[]
  datos=""
  username=""
  frecuencia=""
  fecha=""
  porcentaje=""

  validarcampos():void{
    if(this.datos === "") {
      throw Error("El campo nombre y apellido es obligatorio") 
    }else if (this.username === ""){
      throw Error("El campo username es obligatorio")
    }else if (this.frecuencia === ""){
      throw Error("El campo frecuencia cardíaca en reposo es obligatorio")
    }else if (this.fecha === ""){
      throw Error("El campo fecha de nacimiento es obligatorio")
    } else if (this.porcentaje == ""){
      throw Error ("El campo porcentaje de intensidad es obligatorio")
    }
  }

  //constructor(public usuarioService:UsuarioService){}



  @Input() amigos!:Usuario
  listaDeAmigos=new ListaAmigos()

  ngOnInit(){
    //this.usuario = this.usuarioService.getUsuario()
  }
  

}

export class ListaAmigos{
  
  listaDeAmigos:Usuario[]=[]
  agregarLista(amigos:Usuario){
    this.listaDeAmigos.push(amigos)
  }
}
