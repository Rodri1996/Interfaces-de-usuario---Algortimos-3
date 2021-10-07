import { Component, Input, OnInit } from '@angular/core'
import { Usuario } from 'src/domain/Usuario/usuario'
import { UsuarioService } from 'src/service/usuario.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{

  usuario!:Usuario[]

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
