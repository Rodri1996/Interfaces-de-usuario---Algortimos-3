import { ButtonComponent } from './../componentesCompartidos/button/button.component'
import { LoginComponent } from './../componentesPadres/login/login.component'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FooterComponent } from '../componentesCompartidos/footer/footer.component'
import { NavbarComponent } from 'src/componentesCompartidos/navbar/navbar.component'
import { MenuDesplegableComponent } from 'src/componentesCompartidos/menuDesplegable/menuDesplegable.component'
import { CardComponent } from 'src/componentesCompartidos/card/card.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MenuDesplegableComponent,
    CardComponent,
    ButtonComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
