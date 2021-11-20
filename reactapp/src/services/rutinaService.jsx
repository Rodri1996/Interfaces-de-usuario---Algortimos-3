import axios from 'axios'
import { Rutina } from '../dominio/rutina'
import { REST_SERVER_URL } from './constants'


class RutinaService {

    rutinaAsJson(rutinaJSON) {
        return Rutina.fromJson(rutinaJSON)
    }

    async allInstances() {
        const rutinasJson = await axios.get(`${REST_SERVER_URL}/rutinas`)
        return rutinasJson.data.map((rutinaJson) => Rutina.fromJson(rutinaJson))
    }
}

export const rutinaService = new RutinaService()