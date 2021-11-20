import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './componentes/home/home'
import { Login } from './componentes/login/loginComponent'
import { Actividades } from './componentes/actividades/actividades'
import { Rutina } from './componentes/rutinas/rutina'

const RunappRoutes = () => {

return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route
          path="/"
          exact
          component={Login} />
        <Route
          path="/home"
          component={Home} />
        <Route
          exact
          path="/actividades"
          component={Actividades} />
        <Route
          exact
          path="/Rutina"
          component={Rutina}
          />
        
        <Route component={Home} />
      </Switch>
      <Footer/>
  </BrowserRouter>
)
}
    