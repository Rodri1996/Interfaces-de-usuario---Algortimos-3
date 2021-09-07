import { CriterioDeEdicion } from "../CriterioDeEdicion/criterioDeEdicion";
import { Ejercicio } from "../Ejercicios/ejercicio";
import { GruposMusculares } from "../Grupos Musculares/gruposMusculares";
import { Usuario } from "../Usuario/usuario";

export class Rutina{
    constructor(public ejercicios:Ejercicio[]=[], public creador:Usuario, public unCriterioDeEdicion:CriterioDeEdicion, public seguidores:Usuario[]=[]) {};

    duracion():number{
        return this.ejercicios.reduce((acum,ejercicio) => acum + ejercicio.duracion(),0);
    }

    frecuenciaCardiacaBase():number{
        if (!this.hayEjercicios()) throw Error("No se puede calcular frecuencia cardiaca base porque no tengo ejercicios")
        return this.ejercicios.reduce((acum,ejercicio) => acum + ejercicio.frecuenciaCardiacaBase, 0) / this.ejercicios.length;
    }

    hayEjercicios():boolean{
        return this.ejercicios.length > 0;
    }

    gruposMuscularesQueEntrena():GruposMusculares[]{
        return this.ejercicios.flatMap(unEjercicio => unEjercicio.gruposMuscularesQueEntrena());
    }    
    
    cantidadGruposQueEntrena(): number {
       return this.gruposMuscularesQueEntrena().length;
    }

    agregarEjercicio(unEjercicio:Ejercicio):void{
        this.ejercicios.push(unEjercicio);
    }

    esEditable(unUsuario:Usuario){
        return this.creador == unUsuario || this.unCriterioDeEdicion.rutinaPuedeSerEditadaPor(unUsuario, this);
    }

}