export class Usuario{

    constructor(public id?:number,public username?:string, public password?:string, public amigos:Usuario[]=[]){
        
    }

    agregarAmigo(seguidor1: Usuario) {
        this.amigos.push(seguidor1)
    }
}