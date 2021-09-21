import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from 'src/componentesPadres/login/login.component'
import { BusquedaRutinasComponent } from 'src/componentesPadres/busquedaRutinas/busquedaRutinas.component'
import { MisRutinasComponent } from 'src/componentesPadres/misRutinas/misRutinas.component'
import { UsuarioComponent } from 'src/componentesPadres/usuario/usuario.component'
import { RutinaComponent } from 'src/componentesPadres/rutina/rutina.component'
import { EjercicioComponent } from 'src/componentesPadres/ejercicio/ejercicio.component'


export const routes:Routes =[ 
  {
    path:'login', component:LoginComponent
  },
  {
    path:'home',component:BusquedaRutinasComponent
  },
  {
    path:'misRutinas',component:MisRutinasComponent
  },
  {
    path:'perfil',component:UsuarioComponent
  },
  {
    path:'rutina',component:RutinaComponent
  },
  {
    path:'ejercicio',component:EjercicioComponent
  },
  {
    path:'**',redirectTo:'login'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
