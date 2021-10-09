import { Injectable, OnInit } from '@angular/core';
import { RUTINA, Rutina } from 'src/domain/Rutina/rutina';

@Injectable({
  providedIn: 'root'
})
export class RutinaService{
  
  rutinas:Rutina[] 

  trearRutina(unId:number):Rutina{
    return this.rutinas[0]
  }

  constructor(){
    this.rutinas = [RUTINA]
  }
}
