

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
import { ButtonComponent } from 'src/componentesCompartidos/button/button.component'
import { FooterComponent } from '../componentesCompartidos/footer/footer.component'
import { NavbarComponent } from 'src/componentesCompartidos/navbar/navbar.component'
import { MenuDesplegableComponent } from 'src/componentesCompartidos/menuDesplegable/menuDesplegable.component'
import { CardComponent } from 'src/componentesCompartidos/card/card.component'
import { InputComponent } from 'src/componentesCompartidos/input/input.component'
import { IconoComponent } from 'src/componentesCompartidos/icono/icono.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MenuDesplegableComponent,
    CardComponent,
    ButtonComponent,
    LoginComponent,
    UsuarioComponent,
    MarcadorComponent,
    RutinaComponent,
    InputComponent,
    EjercicioComponent,
    IconoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
