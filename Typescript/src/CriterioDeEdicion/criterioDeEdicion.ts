import { Rutina } from "../Rutina/rutina";
import { Usuario } from "../Usuario/usuario";


export interface CriterioDeEdicion{
    rutinaPuedeSerEditadaPor(unUsuario:Usuario , unaRutina:Rutina):boolean;
}

export class Amistoso {

    rutinaPuedeSerEditadaPor(unUsuario:Usuario , unaRutina:Rutina):boolean{
        return this.amigosDelCreador(unaRutina).includes(unUsuario);
    }

    amigosDelCreador(rutina:Rutina):Usuario[]{
        return this.creadorDeLaRutina(rutina).amigos;
    }

    creadorDeLaRutina(rutina:Rutina):Usuario{
        return rutina.creador;
    }
}

export class Social {
    rutinaPuedeSerEditadaPor(unUsuario:Usuario , unaRutina:Rutina):boolean{
        return this.seguidoresDeLaRutina(unaRutina).includes(unUsuario);
    }

    seguidoresDeLaRutina(rutina:Rutina):Usuario[]{
        return rutina.seguidores;
    }
}

export class Free {
    rutinaPuedeSerEditadaPor(unUsuario:Usuario , unaRutina:Rutina):boolean{
        return true
    }
}