import { Menu, PhoneCall, X } from 'lucide-react'
import { useState } from 'react'
import logoDiaz from '../assets/logo/logoDiaz.png'
import '../styles/navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => setIsOpen(false)

    return (
        <header className="navbar">
            <div className="navbar__container">
                <a href="#inicio" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__logo-wrap">
            <img src={logoDiaz} alt="Transportes Díaz S.R.L." />
          </span>
                </a>

                <nav className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
                    <a href="#inicio" onClick={closeMenu}>Inicio</a>
                    <a href="#empresa" onClick={closeMenu}>Empresa</a>
                    <a href="#servicios" onClick={closeMenu}>Servicios</a>
                    <a href="#flota" onClick={closeMenu}>Flota</a>
                    <a href="#contacto" onClick={closeMenu}>Contacto</a>
                </nav>

                <a
                    className="navbar__cta"
                    href="https://wa.me/543574455459"
                    target="_blank"
                    rel="noreferrer"
                >
                    <PhoneCall size={18} />
                    Logística
                </a>

                <button
                    className="navbar__toggle"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Abrir menú"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    )
}

export default Navbar