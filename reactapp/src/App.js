import './App.css'
import Footer from './componentes/footer/footer'
import Header from './componentes/header/header'
//import Actividades from './componentes/seccionActividades/seccionActividades'
//import Login from './componentes/login/loginComponent'
import Usuario from './componentes/Usuario/usuario'
//import Rutina from './componentes/rutinas/rutina'


function App() {
    return ( 
        <>
        <Header/>
        {/* <Rutina/> */}
        
            <Usuario/>
        {/* <Actividades/> */}
        {/* <Login/>   */}
        <Footer/>
        </>
    );
}

export default App;