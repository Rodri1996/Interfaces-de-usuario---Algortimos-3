export class Actividad{
    
    constructor(){
        this.nombre=""
        this.id = 0
        this.GruposMuscularesQueEntrena = []
    }

    static fromJson(actividadJson){
        const actividadPosta = Object.assign(
            new Actividad(),
            actividadJson,
            {id:actividadJson.id}
        )
        return actividadPosta
    }

    static toJson(actividad){
        return {
            nombre: actividad.nombre,
            GruposMuscularesQueEntrena:actividad.GruposMuscularesQueEntrena
        }
    }
}