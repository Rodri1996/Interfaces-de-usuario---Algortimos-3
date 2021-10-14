import { Injectable } from "@angular/core"
import { Usuario } from "src/domain/Usuario/usuario"

 @Injectable({
     providedIn: 'root'
 })
 export class UsuarioService{

    private usuarios:Usuario[] =[
        new Usuario(1,'pepe','123'),
        new Usuario(2,'pedro','321')
    ]

    loguearUsuario(username:string, password:string):Promise<Usuario>{
        return new Promise((resolve) => {
       const usuarioBuscado=this.usuarios.filter((usuario:Usuario) => username === usuario.username && password === usuario.password)[0]
       if(!usuarioBuscado) throw Error("Usuario y/o contraseña es invalido") 
       resolve(usuarioBuscado)
       })
    }
 }
