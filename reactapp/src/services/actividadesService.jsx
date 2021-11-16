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

    async borrarActividad(idActividad){
        console.log('voy a eliminar la actividad con id '+idActividad)
        await axios.delete(REST_SERVER_URL+"/actividad/"+idActividad)
    }
}

export const actividadesService = new ActividadesService()