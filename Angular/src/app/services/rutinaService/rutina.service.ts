import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CriterioDeEdicion } from 'src/domain/CriterioDeEdicion/criterioDeEdicion';
import { Ejercicio } from 'src/domain/Ejercicios/ejercicio';
import { RUTINA, Rutina, RutinaJson } from 'src/domain/Rutina/rutina';


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
  
  async actualizarRutina(rutina: Rutina) {
     await this.http.put('http://localhost:8080/rutinas/'+rutina.id,rutina.toJson()).toPromise()
  }
}
