import axios from "axios"
import { Actividad } from "../dominio/actividad"
import {REST_SERVER_URL} from '../services/constants'

class ActividadesService{

    async getActividades(){
        const actividadesJson = await axios.get
        (REST_SERVER_URL+'/actividades')
        return actividadesJson.data.map((actividadJSON)=>Actividad.fromJson(actividadJSON))
    }

    async sumarActividad(actividad){
        axios.post(REST_SERVER_URL+"/actividad",Actividad.toJson(actividad))
    }
}

export const actividadesService = new ActividadesService()