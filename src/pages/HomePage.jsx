import BarraDeNavegacion from "../components/Navbar.jsx"
import Team from '../components/Team.jsx'
import Footer from '../components/Footer.jsx'
// import SomosDynamos from "../components/SomosDynamos.jsx"
import Eventos from "../components/Eventos.jsx"
import Bienvenida from "../components/Bienvenida.jsx"
import Testimonios from '../components/Testimonios.jsx'
import { useAuth } from "../context/AuthContext.jsx"

function HomePage() {
  const { themma } = useAuth()

  return (
    <div className={`${themma}`}>
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