export class Actividad{
    
    constructor(){
        this.nombre=""
    }

    static fromJson(actividadJson){
        const actividadPosta = Object.assign(
            new Actividad(),
            actividadJson,
            {}
        )
        return actividadPosta
    }
}