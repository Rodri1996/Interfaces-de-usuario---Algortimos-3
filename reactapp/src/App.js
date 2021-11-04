import logo from './logo.svg';
import './App.css';
import Footer from './componentes/footer/footer'
import Header from './componentes/header/header';
import Actividades from './componentes/actividades/actividades';


function App() {
    return ( 
        <div className = "App" >
        <Header/>
        <header className = "App-header" >
          
        </header> 
        <Actividades></Actividades>
        <Footer/>
        </div>
    );
}

export default App;