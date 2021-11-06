import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { LoginComponent } from '../src/componentes/login/loginComponent'

export const TareasRoutes = () => 
    <Router>
        <Route exact={true} path="/" component={LoginComponent} />     
    </Router>