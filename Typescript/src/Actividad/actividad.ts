import { GruposMusculares } from "../Grupos Musculares/gruposMusculares";

export class Actividad{
    constructor(public gruposMuscularesQueEntrena:GruposMusculares[]=[]){}

    agregarGrupoMuscular(unGrupoMuscular:GruposMusculares):void{
        this.gruposMuscularesQueEntrena.push(unGrupoMuscular)
    }
}