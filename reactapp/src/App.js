import './App.css'
import Actividades from './componentes/actividades/actividades'
import Footer from './componentes/footer/footer'
import Header from './componentes/header/header'
import Login from './componentes/login/loginComponent'
import Usuario from './componentes/Usuario/usuario'
import Rutina from './componentes/rutinas/rutina'
import Home from './componentes/home/home'


function App() {
    return (
        <>
            <Header />

            <div className="defaultPageSize">
              
                <Login />

                {/* <Home/>  */}

                {/* <Rutina/> */}

                {/* <Usuario/> */}

                {/* <Actividades/> */}
            </div>
            
            <Footer />
        </>
    )
}

export default App
