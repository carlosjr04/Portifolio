import "./App.css"
import Header from './componentes/Header'
import HomePage from './componentes/HomePage'
import SobreMim from './componentes/SobreMim'
import Serviços from './componentes/Serviços'
import Projeto from './componentes/Projeto'
import Formulario from './componentes/Formulario'
import Footer from './componentes/Footer'
import { DarkMode } from './store/DarkMode'

function App() {
  const dark = DarkMode((state) => state.dark);

  return (
    <div className={dark == true ? "bodyEscuro" : "bodyClaro"}>
      <Header />
      <section id="HomePage" >
        <HomePage />
      </section>
      <section id="SobreMim" className="espacamento">
        <SobreMim />
      </section>
      <section id="Serviços" className="espacamento">
        <Serviços />
      </section>
      <section id="Projetos" className="espacamento">
        <Projeto />
      </section>
      <section id="Contato" className="espacamento">
        <Formulario />
      </section>
      <section className="espacamento">
        <Footer />
      </section>
    </div>
  )
}

export default App
