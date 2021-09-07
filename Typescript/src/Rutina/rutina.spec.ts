import { Amistoso, CriterioDeEdicion, Free, Social } from "../CriterioDeEdicion/criterioDeEdicion"
import { EjercicioCompuesto, EjercicioSimple } from "../Ejercicios/ejercicio"
import { Usuario } from "../Usuario/usuario"
import { Actividad } from "../Actividad/actividad";
import { GruposMusculares } from "../Grupos Musculares/gruposMusculares";
import { Rutina } from "./rutina"
describe('Dada una Rutina', () => {
  const fcBase: number = 90;
  const minDescanso:number = 10;
  const minTrabajo:number = 10;
  const series:number = 3;
  const creador= new Usuario()
  const criterioAmistoso = new Amistoso()
  const criterioSocial = new Social()
  const criterioFree = new Free()
  const seguidor1 = new Usuario()
  const seguidor2 = new Usuario()
  const amigos= new Usuario([seguidor1, seguidor2])
  const unaActividad=new Actividad([GruposMusculares.piernas,GruposMusculares.abdomen,GruposMusculares.pecho]);
  const ejercicioSimple1 = new EjercicioSimple(minTrabajo, fcBase, minDescanso, unaActividad);
  const ejercicioSimple2 = new EjercicioSimple(minTrabajo+10, fcBase+10, minDescanso+10, unaActividad);
  const ejercicioSimple3 = new EjercicioSimple(minTrabajo+30, fcBase-10, minDescanso+5, unaActividad);
  const ejercicioCompuesto1 = new EjercicioCompuesto(series, fcBase, minDescanso, unaActividad);
  const ejercicioCompuesto2 = new EjercicioCompuesto(series-1, fcBase+10, minDescanso+10, unaActividad);
  const ejercicioCompuesto3 = new EjercicioCompuesto(series+1, fcBase-10, minDescanso+5, unaActividad);
  const unaRutina1 = new Rutina ([ejercicioSimple1,ejercicioSimple2,ejercicioCompuesto1,ejercicioCompuesto2],creador,criterioFree,[seguidor1])
  const unaRutina2 = new Rutina ([ejercicioSimple1,ejercicioSimple2,ejercicioCompuesto1,ejercicioCompuesto2],creador,criterioAmistoso,[seguidor1])
  const unaRutina3 = new Rutina ([ejercicioSimple1,ejercicioSimple2,ejercicioCompuesto1,ejercicioCompuesto2],creador,criterioSocial,[seguidor2])
  test('se puede obtener su duracion', () => {
    expect(unaRutina1.duracion()).toBe(200);

  })

  test('se puede obtener la frecuencia cardiaca base', () => {
    expect(unaRutina1.frecuenciaCardiacaBase()).toBe(95);
  })

  test('si no tiene ejercicios, arrojara un error al obtener la frecuencia cardiaca', () => {
    const unaRutinaSinEjercicios = new Rutina ([],creador,criterioFree,[seguidor1]);

    expect(() => unaRutinaSinEjercicios.frecuenciaCardiacaBase()).toThrowError();
  })

  test('tiene grupos musculares asociados a ella', () => {
    expect(unaRutina1.cantidadGruposQueEntrena()).toBe(12);
  })

  test('si tiene criterio de edicion amistoso,un usuario puede editarla si es amigo de su creador', () => {
        let unUsuarioNoCreador = new Usuario()
        unaRutina2.creador.agregarAmigo(unUsuarioNoCreador)
        unaRutina2.unCriterioDeEdicion = criterioAmistoso

        expect(unaRutina2.esEditable(unUsuarioNoCreador)).toBe(true)
  })

  describe ('se puede editar si', () =>{

  test('es Free si no es seguidor', () => {
    expect(criterioFree.rutinaPuedeSerEditadaPor(seguidor2,unaRutina1)).toBe(true);
  })

  test('es Free si es un seguidor', () => {
    expect(criterioFree.rutinaPuedeSerEditadaPor(seguidor1,unaRutina1)).toBe(true);
  })

  test(' no es amistoso', () => {
    expect(criterioAmistoso.rutinaPuedeSerEditadaPor(seguidor1 ,unaRutina2)).toBe(false)
  })

  //test('es Social', () => {
    //expect(criterioSocial.rutinaPuedeSerEditadaPor(seguidor1 ,unaRutina2).toBe();
  //})

  test('si tiene criterio de edicion Social,un usuario seguidor puede editarla',()=>{
    expect(unaRutina3.esEditable(seguidor2)).toBe(true)
})

  

})


  
})

