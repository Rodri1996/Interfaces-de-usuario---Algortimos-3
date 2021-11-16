export class Actividad{
    
    constructor(){
        this.nombre=""
        this.id = 0
    }

    static fromJson(actividadJson){
        const actividadPosta = Object.assign(
            new Actividad(),
            actividadJson,
            {id:actividadJson.id}
        )
        return actividadPosta
    }

    static toJson(actividad){
        return {
            nombre: actividad.nombre
            //falta agregar los grupos musculares de la actividad recibida por parametro
        }
    }
}