import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
/* import SomosDynamos from '../components/SomosDynamos' */
import SomosDynamosNew from '../components/SomosDynamosNew'

function SomosDynamosPage() {
  return (
    <div className='bg-black'>
        <Navbar />
        <SomosDynamosNew />
        <Footer />
    </div>
  )
}

export default SomosDynamosPage