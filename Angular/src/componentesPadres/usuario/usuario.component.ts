import { Component, Input, OnInit } from '@angular/core'
import { Usuario } from 'src/domain/Usuario/usuario'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent{

  @Input() amigos!:Usuario
  listaDeAmigos=new ListaAmigos()
  

}

export class ListaAmigos{
  
  listaDeAmigos:Usuario[]=[]
  agregarLista(amigos:Usuario){
    this.listaDeAmigos.push(amigos)
  }
}
