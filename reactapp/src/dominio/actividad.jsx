import { ThirtyFpsSharp } from "@mui/icons-material"
import { set } from "date-fns"

export class Actividad{
    
    constructor(){
        this.nombre=""
        this.id = 0
        this.gruposMusculares = []
        this.errors = []
    }

    static fromJson(actividadJson){
        const actividadPosta = Object.assign(
            new Actividad(),
            actividadJson,
            {id:actividadJson.id,
             gruposMusculares:actividadJson.gruposMuscularesQueEntrena}
        )
        return actividadPosta
    }

    static toJson(actividad){
        return {
            nombre: actividad.nombre,
            GruposMuscularesQueEntrena:actividad.gruposMusculares
        }
    }

    contieneGrupo(grupoMarcado){
        if(this.gruposMusculares.some((grupo)=>grupo===grupoMarcado)){
            throw Error('Grupo ya marcado')
        }
    }

    validar(){
        if(!this.nombre){
            throw Error('Debe asignarle un nombre a la actividad')
        }
        else if(!this.gruposMusculares.length>0){
            throw Error('Debe marcar al menos un grupo muscular')
        }
    }
}