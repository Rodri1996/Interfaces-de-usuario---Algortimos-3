import { GruposMusculares } from './../../../../Typescript/src/Grupos Musculares/gruposMusculares'
import { Component } from '@angular/core'
import { RutinaService } from 'src/services/rutina/rutina.service'
import { Ejercicio, EjercicioSimple } from 'src/domain/Ejercicios/ejercicio'
import { EjercicioService } from 'src/services/ejercicio/ejercicio.service'
import { Actividad } from 'src/domain/Actividad/actividad'


@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent {

  nombreRutina:string 
  descripcionRutina!:string
  estrategiaDeEdicion!:string
  creadorRutina:string = "Por " 
  ejercicios!:Ejercicio[]
  gruposMusculares!:GruposMusculares[]

  constructor(private rutinaService:RutinaService,private ejercicioService:EjercicioService) {
    // this.ejercicios = this.ejercicioService.traerEjercicios()
    this.nombreRutina = "Brazos"
    this.creadorRutina += "Juan Perez" 
    this.gruposMusculares=[GruposMusculares.abdomen, 
                            GruposMusculares.pecho, 
                            GruposMusculares.gluteos, 
                            GruposMusculares.piernas, 
                            GruposMusculares.hombros, 
                            GruposMusculares.brazos, 
                            GruposMusculares.espalda]
    
  }

  agregarRutina(){
    const unaRutina = this.rutinaService.crearRutina(this.nombreRutina,this.descripcionRutina,this.estrategiaDeEdicion)
  }
  
}

