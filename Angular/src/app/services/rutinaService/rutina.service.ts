import { Injectable, OnInit } from '@angular/core';
import { RUTINA, Rutina } from 'src/domain/Rutina/rutina';

@Injectable({
  providedIn: 'root'
})
export class RutinaService{
  
  rutinas:Rutina[] 
  miId!:number

  trearRutina(unId:number){
    console.log("El id pasado vale: "+unId)
    return this.rutinas.find((rutina)=>{
      return rutina.id == 0
    })
  }

  constructor(){
    RUTINA.id = 0 
    this.rutinas = [RUTINA]
  }
}
