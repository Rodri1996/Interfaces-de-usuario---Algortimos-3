import axios from "axios"
import { GruposMuscular} from "../dominio/gruposMusculares"
import {REST_SERVER_URL} from '../services/constants'

class GruposMuscularesService{

    async getGruposMusculares(){
        let gruposJson = await axios.get(REST_SERVER_URL+"/grupos")
        let gruposPosta = gruposJson.data.map((grupo)=>GruposMuscular.fromjson(grupo))
        return gruposPosta
    }
    
}

export const gruposMuscularesService=new GruposMuscularesService()
