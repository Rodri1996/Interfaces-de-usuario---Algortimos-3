import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './componentes/home/home'

export const RunappRoutes = () => 
    <Router>
        <Route exact={true} path="/" component={Home} />     
    </Router>