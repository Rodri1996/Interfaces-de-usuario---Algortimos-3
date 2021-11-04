import logo from './logo.svg';
import './App.css';
import Footer from './componentes/footer/footer'
import Header from './componentes/header/header';
import SeccionActividades from './componentes/seccionActividades/seccionActividades';

function App() {
    return ( 
        <div className = "App" >
        <Header/>
        <header className = "App-header" >
          
        </header> 
        <SeccionActividades></SeccionActividades>
        <Footer/>
        </div>
    );
}

export default App;