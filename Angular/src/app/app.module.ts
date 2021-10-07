import { MinicardComponent } from './../componentesCompartidos/minicard/minicard.component'


import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing/app-routing.module'
import { AppComponent } from './app.component'

import { EjercicioComponent } from 'src/componentesPadres/ejercicio/ejercicio.component'
import { UsuarioComponent } from 'src/componentesPadres/usuario/usuario.component'
import { RutinaComponent } from 'src/componentesPadres/rutina/rutina.component'
import { LoginComponent } from 'src/componentesPadres/login/login.component'

import { MarcadorComponent } from './../componentesCompartidos/marcador/marcador.component'
import { FooterComponent } from '../componentesCompartidos/footer/footer.component'
import { NavbarComponent } from 'src/componentesCompartidos/navbar/navbar.component'
import { MenuDesplegableComponent } from 'src/componentesCompartidos/menuDesplegable/menuDesplegable.component'

import { InputComponent } from 'src/componentesCompartidos/input/input.component'
import { MisRutinasComponent } from 'src/componentesPadres/misRutinas/misRutinas.component'
import { BusquedaRutinasComponent } from 'src/componentesPadres/busquedaRutinas/busquedaRutinas.component'
import { CardComponent } from 'src/componentesCompartidos/card/card.component'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MenuDesplegableComponent,
    LoginComponent,
    UsuarioComponent,
    MarcadorComponent,
    RutinaComponent,
    InputComponent,
    EjercicioComponent,
    MinicardComponent,
    MisRutinasComponent,
    BusquedaRutinasComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
