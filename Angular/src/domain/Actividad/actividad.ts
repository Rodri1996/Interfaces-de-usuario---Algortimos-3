import { GruposMusculares } from "../Grupos Musculares/gruposMusculares";

export class Actividad{

    constructor(public gruposMuscularesQueEntrena:Set<GruposMusculares>=new Set(),public nombre:string){}

    agregarGrupoMuscular(unGrupoMuscular:GruposMusculares):void{
        this.gruposMuscularesQueEntrena.add(unGrupoMuscular)
    }
}

export const ABDOMINALES = new Actividad(new Set(),'Abdominales')
export const PIERNAS = new Actividad(new Set(),'Piernas')
export const GLUTEOS = new Actividad(new Set(),'Gluteos')

export const ACTIVIDADES = [ABDOMINALES,PIERNAS,GLUTEOS]