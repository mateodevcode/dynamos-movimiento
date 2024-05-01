import BarraDeNavegacion from "../components/Navbar.jsx"
import Team from '../components/Team.jsx'
import Footer from '../components/Footer.jsx'
import Eventos from "../components/Eventos.jsx"
import Bienvenida from "../components/Bienvenida.jsx"
import Testimonios from '../components/Testimonios.jsx'

function HomePage() {

  return (
    <div className="dark:bg-gray-900">
        <BarraDeNavegacion />
        <Bienvenida  />
        <Eventos  />
        <Testimonios  />
        <Team  />
        <Footer  />
    </div>
  )
}

export default HomePage