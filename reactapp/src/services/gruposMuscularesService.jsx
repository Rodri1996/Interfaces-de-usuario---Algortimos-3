import axios from "axios"
import {REST_SERVER_URL} from '../services/constants'

class GruposMuscularesService{

    async getGruposMusculares(){
        const gruposJson = await axios.get(REST_SERVER_URL+"/grupos")
        return gruposJson
    }
}

export const gruposMuscularesService=new GruposMuscularesService()
