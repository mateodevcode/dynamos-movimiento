import BarraDeNavegacion from "../components/Navbar.jsx"
import Team from '../components/Team.jsx'
import Footer from '../components/Footer.jsx'
import Eventos from "../components/Eventos.jsx"
import Testimonios from '../components/Testimonios.jsx'
import NewBienvenida from "../components/NewBienvenida.jsx"
import SomosDynamosNew from "../components/SomosDynamosNew.jsx"

function HomePage() {

  return (
    <div>
        <BarraDeNavegacion />
        <NewBienvenida />
        <SomosDynamosNew />
        <Eventos  />
        <Testimonios  />
        <Team  />
        <Footer  />
    </div>
  )
}

export default HomePage