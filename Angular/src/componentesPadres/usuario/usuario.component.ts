import { Component, Input, OnInit } from '@angular/core'
import { Dias, Usuario } from 'src/domain/Usuario/usuario'
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

  agregarGrupoPreferido(grupo:string){ 
    if(this.usuario.gruposMuscularesDePreferencia.includes(grupo as GruposMusculares)){
      this.usuario.gruposMuscularesDePreferencia.splice(this.usuario.gruposMuscularesDePreferencia.indexOf(grupo as GruposMusculares), 1)
    }else{
      this.usuario.gruposMuscularesDePreferencia.push(grupo as GruposMusculares)
    }
    console.log(this.usuario)
  }

  @Input() amigos!:Usuario
  listaDeAmigos=new ListaAmigos()

  ngOnInit(){
    this.usuario.diasDeEntrenamiento = [
      {nombre:Dias.lunes,minutosDeEntrenamiento:0},
      {nombre:Dias.martes,minutosDeEntrenamiento:0},
      {nombre:Dias.miercoles,minutosDeEntrenamiento:0},
      {nombre:Dias.jueves,minutosDeEntrenamiento:0},
      {nombre:Dias.viernes,minutosDeEntrenamiento:0},
      {nombre:Dias.sabado,minutosDeEntrenamiento:0},
      {nombre:Dias.domingo,minutosDeEntrenamiento:0}
    ]
  }
}



export class ListaAmigos{
  
  listaDeAmigos:Usuario[]=[]
  agregarLista(amigos:Usuario){
    this.listaDeAmigos.push(amigos)
  }
}
