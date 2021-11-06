import './App.css'
import Footer from './componentes/footer/footer'
import Header from './componentes/header/header'
import Actividades from './componentes/seccionActividades/seccionActividades'
import Login from './componentes/login/loginComponent'


function App() {
    return ( 
        <>
        <Header/>
        <header className = "App-header" >
        <Login/>  
        </header> 
        <Actividades></Actividades>
        <Footer/>
        </>
    );
}

export default App;