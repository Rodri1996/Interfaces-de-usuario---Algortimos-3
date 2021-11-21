import './App.css'
import Footer from './componentes/footer/footer'
import Header from './componentes/header/header'
import RunappRoutes from './router'

function App() {
    return (
        <>
            <Header />

            <div className="defaultPageSize">
 
                <RunappRoutes/>
               
            </div>
            
            <Footer />
        </>
    )
}

export default App
