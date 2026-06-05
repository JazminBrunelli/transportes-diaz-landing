import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MouseGlow from './components/MouseGlow'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import FleetSection from './components/FleetSection'
import StatsSection from './components/StatsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import './styles/global.css'

function App() {
    return (
        <main className="app">
            <MouseGlow />
            <Navbar />
            <Hero />
            <AboutSection />
            <ServicesSection />
            <FleetSection />
            <StatsSection />
            <ContactSection />
            <Footer />
        </main>
    )
}

export default App