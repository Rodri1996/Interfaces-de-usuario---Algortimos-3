import './App.css'
import Actividades from './componentes/actividades/actividades';
import Footer from './componentes/footer/footer'
import Header from './componentes/header/header'
//import Login from './componentes/login/loginComponent'
import Usuario from './componentes/Usuario/usuario'
//import Rutina from './componentes/rutinas/rutina'


function App() {
    return ( 
        <>
        <Header/>
        {/* <Rutina/> */}
        
        {/* <Usuario/> */}
        
        <Actividades/>

        {/* <Login/>   */}
        <Footer/>
        </>
    );
}

export default App;