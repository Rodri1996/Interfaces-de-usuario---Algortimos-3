import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import {Switch} from 'react-router-dom'
import  Home  from './componentes/home/home'
import  Login  from './componentes/login/loginComponent'
import  Actividades  from './componentes/actividades/actividades'
import  Rutina  from './componentes/rutinas/rutina'
import Usuario from './componentes/usuario/usuario.jsx'
import Header from './componentes/header/header'


const RunappRoutes = () => {

return(
    <BrowserRouter>
     <Switch>
       <Route
        path='/'
        exact
        >
        </Route>
        <Route
        path='*'
        >
        <Header/>
        </Route>
     </Switch>
     <div className="defaultPageSize">
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
            <Route
            exact
            path="/usuario"
            component={Usuario}
            />
          <Route component={Home} />
          
        </Switch>
        </div>
  </BrowserRouter>
)
}

export default RunappRoutes;
    