import axios from "axios"
import { GruposMuscular} from "../dominio/gruposMusculares"
import {REST_SERVER_URL} from '../services/constants'

class GruposMuscularesService{

    async getGruposMusculares(){
        const gruposJson = await axios.get(REST_SERVER_URL+"/grupos")
        console.log('Grupos: '+gruposJson)
        //return gruposJson.data.map((grupo)=>GruposMuscular.fromjson(grupo))
        //return this.gruposMuscularesFromJson(gruposJson)
        return ["piernas","brazos","gluteos"]
    }
    
}

export const gruposMuscularesService=new GruposMuscularesService()
