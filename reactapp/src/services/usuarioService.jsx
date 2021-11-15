import axios from 'axios'

import { Usuario } from '../dominio/usuario'
import { REST_SERVER_URL } from './constants'

class UsuarioService {

  usuarioAsJson(usuarioJSON) {
    return Usuario.fromJson(usuarioJSON)
  }

  async allInstances() {
    const usuarioJson = await axios.get(`${REST_SERVER_URL}/usuario`)
    return usuarioJson.data.map((usuarioJson) => Usuario.fromJson(usuarioJson))
  }

  async getTareaById(id) {
    const usuarioJson = await axios.get(`${REST_SERVER_URL}/usuario/${id}`)
    return this.usuarioAsJson(usuarioJson.data)
  }


}

export const usuarioService = new UsuarioService()