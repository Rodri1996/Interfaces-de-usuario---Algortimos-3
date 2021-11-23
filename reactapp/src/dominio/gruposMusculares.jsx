export class GruposMuscular{

    constructor(){
        this.id=0
        this.nombre =""
    }

    static fromjson(grupo){
        const grupoMuscular = Object.assign(
            new GruposMuscular(),
            grupo,
            {
            }
        )
        return grupoMuscular
    }
}