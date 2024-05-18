import BarraDeNavegacion from "../components/Navbar.jsx"
import Team from '../components/Team.jsx'
import Footer from '../components/Footer.jsx'
import Eventos from "../components/Eventos.jsx"
// import Bienvenida from "../components/Bienvenida.jsx"
import Testimonios from '../components/Testimonios.jsx'
import NewBienvenida from "../components/NewBienvenida.jsx"

function HomePage() {

  return (
    <div>
        <BarraDeNavegacion />
        <NewBienvenida />
        {/* <Bienvenida  /> */}
        <Eventos  />
        <Testimonios  />
        <Team  />
        <Footer  />
    </div>
  )
}

export default HomePage