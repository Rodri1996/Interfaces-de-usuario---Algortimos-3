import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CriterioDeEdicion } from 'src/domain/CriterioDeEdicion/criterioDeEdicion';
import { Ejercicio } from 'src/domain/Ejercicios/ejercicio';
import { RUTINA, Rutina } from 'src/domain/Rutina/rutina';

export type RutinaJson = {
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
  
  // rutinas:Rutina[] 
  
  
  constructor(private http:HttpClient){
    
  }
  
  async traerRutina(idRutina:number):Promise<Rutina>{
    console.log('Id de la rutina que llega al servicio rutinas: '+idRutina)
    const rutinaJson = await this.http.get<RutinaJson>('http://localhost:8080/rutina/'+idRutina).toPromise()
    console.info(rutinaJson)
    return Rutina.fromJson(rutinaJson)
  }
  
  // constructor(){
    //   RUTINA.id = 0 
    //   this.rutinas = [RUTINA]
    // }
    
    // trearRutina(unId:number){
      //     console.log("El id pasado vale: "+unId)
      //     return this.rutinas.find((rutina)=>{
        //         return rutina.id == 0
        //       })
        // }
      }
