import './App.css'
import Footer from './componentes/footer/footer'
import RunappRoutes from './router'
import { useLocation } from 'react-router'


function App() {
    //let ubicacion = useLocation();
    //console.log(ubicacion)
    return (
        <>

            {/* <div className="defaultPageSize"> */}
 
                <RunappRoutes/>
               
            {/* </div> */}
            
            <Footer />
        </>
    )
}

export default App
