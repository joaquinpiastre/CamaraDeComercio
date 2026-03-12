import Header from './components/Header'
import Hero from './components/Hero'
import Institucional from './components/Institucional'
import Concejales from './components/Concejales'
import Ordenanzas from './components/Ordenanzas'
import Noticias from './components/Noticias'
import Participacion from './components/Participacion'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Institucional />
        <Concejales />
        <Ordenanzas />
        <Noticias />
        <Participacion />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
