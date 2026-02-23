import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Services from './components/Services'
import Process from './components/Process'
import Pricing from './components/Pricing'
import TechStack from './components/TechStack'
import Trust from './components/Trust'
import AuditCTA from './components/AuditCTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <Process />
        <Pricing />
        <TechStack />
        <Trust />
        <AuditCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
