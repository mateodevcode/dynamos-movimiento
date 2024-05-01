import BarraDeNavegacion from "../components/Navbar.jsx"
import Footer from '../components/Footer.jsx'
import Testimonios from "../components/Testimonios.jsx"
import { useAuth } from "../context/AuthContext.jsx"


function TestimoniosPage() {
  const { themma } = useAuth()

  return (
    <div className={`${themma}`}>
        <BarraDeNavegacion />
        <Testimonios />
        <Footer />
    </div>
  )
}

export default TestimoniosPage