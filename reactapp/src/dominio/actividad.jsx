import { ThirtyFpsSharp } from "@mui/icons-material"
import { set } from "date-fns"

export class Actividad{
    
    constructor(){
        this.nombre=""
        this.id = 0
        this.GruposMuscularesQueEntrena = []
        this.errors = []
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

    validar(){
        if(!this.nombre){
            throw Error('Debe asignarle un nombre a la actividad')
        }
        else if(!this.GruposMuscularesQueEntrena.length>0){
            throw Error('Debe marcar al menos un grupo muscular')
        }
    }
}