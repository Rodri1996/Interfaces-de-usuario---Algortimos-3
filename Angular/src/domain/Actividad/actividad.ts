import { GruposMusculares } from "../Grupos Musculares/gruposMusculares";

export class Actividad{

    constructor(public gruposMuscularesQueEntrena:Set<GruposMusculares>=new Set(),public nombre:string){}

    agregarGrupoMuscular(unGrupoMuscular:GruposMusculares):void{
        this.gruposMuscularesQueEntrena.add(unGrupoMuscular)
    }
}