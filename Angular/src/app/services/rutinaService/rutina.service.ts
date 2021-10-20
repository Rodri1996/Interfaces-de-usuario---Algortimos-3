import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CriterioDeEdicion } from 'src/domain/CriterioDeEdicion/criterioDeEdicion';
import { Ejercicio } from 'src/domain/Ejercicios/ejercicio';
import { RUTINA, Rutina } from 'src/domain/Rutina/rutina';

export type RutinaJSON = {
  id:number
  ejercicios:Ejercicio[]
  nombreRutina:string
  nombreCreador:string
  apellidoCreador:string
  descripcion:string
  criterioDeEdicion:CriterioDeEdicion
}
@Injectable({
  providedIn: 'root'
})

export class RutinaService{
  
  constructor(private http:HttpClient){}
  
  async trearRutina(unId:number){
    let rutinasDTO = await this.http.get<RutinaJSON>("http://localhost:8080/rutina/0").toPromise()
    return Rutina.fromJson(rutinasDTO)
  }
  
  // rutinas:Rutina[] 
  // miId!:number
  
  // trearRutina(unId:number){
    //   console.log("El id pasado vale: "+unId)
    //   return this.rutinas.find((rutina)=>{
      //     return rutina.id == 0
      //   })
      // }
      
      // constructor(){
        //   RUTINA.id = 0 
        //   this.rutinas = [RUTINA]
        // }
}
