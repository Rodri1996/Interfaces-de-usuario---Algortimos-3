import axios from 'axios'

import { Usuario } from '../dominio/usuario'
import { REST_SERVER_URL } from './constants'

class UsuarioService {

  usuarioAsJson(usuarioJSON) {
    return Usuario.fromJson(usuarioJSON)
  }

  async allInstances() {
    const usuariosJson = await axios.get(`${REST_SERVER_URL}/usuarios`)
    return usuariosJson.data.map((usuarioJson) => Usuario.fromJson(usuarioJson))
  }

  async getUsuarioById(id) {
    const usuarioJson = await axios.get(`${REST_SERVER_URL}/usuario/${id}`)
    return this.usuarioAsJson(usuarioJson.data)
  }

  async postUsuarioLogueado(username,password){
    const usuarioPosteado=await axios.post(REST_SERVER_URL+"/login",Usuario.toJson(username,password))
    return Usuario.fromJson2(usuarioPosteado)
  }

}

export const usuarioService = new UsuarioService()