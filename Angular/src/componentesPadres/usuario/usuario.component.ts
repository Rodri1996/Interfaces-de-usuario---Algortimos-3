import { Component, Input, OnInit } from '@angular/core'
import { Usuario } from 'src/domain/Usuario/usuario'
import { GruposMusculares } from 'src/domain/Grupos Musculares/gruposMusculares'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{

  usuario=new Usuario()
  fecha=""
  @Input() diasDeSemana!:string
  
  gruposMusculares=[
    GruposMusculares.abdomen, 
    GruposMusculares.brazos, 
    GruposMusculares.espalda, 
    GruposMusculares.gluteos, 
    GruposMusculares.hombros, 
    GruposMusculares.pecho, 
    GruposMusculares.piernas
  ]

  dias=[
    Dias.lunes,
    Dias.martes,
    Dias.miercoles,
    Dias.jueves,
    Dias.viernes,
    Dias.sabado,
    Dias.domingo
]

  validarcampos():void{
    if(this.usuario.datos === "") {
      throw Error("El campo nombre y apellido es obligatorio") 
    }else if (this.usuario.username === ""){
      throw Error("El campo username es obligatorio")
    }else if (this.usuario.frecuencia === ""){
      throw Error("El campo frecuencia cardíaca en reposo es obligatorio")
    }else if (!this.fecha){
      throw Error("El campo fecha de nacimiento es obligatorio")
    } else if (this.usuario.porcentaje == ""){
      throw Error ("El campo porcentaje de intensidad es obligatorio")
    }
  }

  @Input() amigos!:Usuario
  listaDeAmigos=new ListaAmigos()

  ngOnInit(){
    //this.usuario = this.usuarioService.getUsuario()
  }
  

}

export enum Dias{
  lunes="L",
  martes="M",
  miercoles="M",
  jueves="J",
  viernes="V",
  sabado="S",
  domingo="D"
}

export class ListaAmigos{
  
  listaDeAmigos:Usuario[]=[]
  agregarLista(amigos:Usuario){
    this.listaDeAmigos.push(amigos)
  }
}
