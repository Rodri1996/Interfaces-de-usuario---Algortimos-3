import axios from "axios"
import { Actividad } from "../dominio/actividad"

class ActividadesService{

    async getActividades(){
        const actividadesJson = await axios.get
        ("http://localhost:8080/actividades")
        return actividadesJson.data.map((actividadJSON)=>Actividad.fromJson(actividadJSON))
    }

    async sumarActividad(actividad){
        axios.post("http://localhost:8080/actividad",Actividad.toJson(actividad))
    }
}

export const actividadesService = new ActividadesService()