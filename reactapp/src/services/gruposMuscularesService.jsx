import axios from "axios"

class GruposMuscularesService{

    async getGruposMusculares(){
        const gruposJson = await axios.get("http://localhost:8080/grupos")
        return gruposJson
    }
}

export const gruposMuscularesService=new GruposMuscularesService()
