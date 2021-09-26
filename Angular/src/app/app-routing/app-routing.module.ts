import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
//Componentes propios:
import { LoginComponent } from 'src/componentesPadres/login/login.component'
import { BusquedaRutinasComponent } from 'src/componentesPadres/busquedaRutinas/busquedaRutinas.component'
import { MisRutinasComponent } from 'src/componentesPadres/misRutinas/misRutinas.component'
import { UsuarioComponent } from 'src/componentesPadres/usuario/usuario.component'
import { RutinaComponent } from 'src/componentesPadres/rutina/rutina.component'
import { EjercicioComponent } from 'src/componentesPadres/ejercicio/ejercicio.component'

export const routes: Routes = [
  { path: 'login2', component: LoginComponent },
  { path: 'home2', component: BusquedaRutinasComponent },
  { path: 'misRutinas2', component: MisRutinasComponent },
  { path: 'perfil2', component: UsuarioComponent },
  { path: 'rutina2', component: RutinaComponent },
  { path: 'ejercicio2', component: EjercicioComponent },
  { path: '**', redirectTo: 'rutina2' }
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
