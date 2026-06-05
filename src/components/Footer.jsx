import { ArrowUpRight, Mail, MapPin, PhoneCall, Truck } from 'lucide-react'
import logoDiaz from '../assets/logo/logoDiaz.png'
import '../styles/footer.css'

const mapsUrl =
    'https://www.google.com/maps/place/Transportes+Diaz+S.R.L/@-31.3290884,-63.6358583,17z/data=!4m6!3m5!1s0x9432df00034e630f:0x72886e521b66542!8m2!3d-31.32909!4d-63.6338072!16s%2Fg%2F11xvvrtm7p?entry=ttu'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__glow" />

            <div className="footer__container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <a href="#inicio" className="footer__logo">
                            <img src={logoDiaz} alt="Transportes Díaz S.R.L." />
                        </a>

                        <p>
                            Empresa familiar con más de dos décadas de trayectoria dedicada al
                            transporte de cargas generales en todo el territorio argentino.
                        </p>
                    </div>

                    <div className="footer__columns">
                        <div className="footer__column">
                            <h3>Navegación</h3>

                            <a href="#inicio">Inicio</a>
                            <a href="#empresa">Empresa</a>
                            <a href="#servicios">Servicios</a>
                            <a href="#flota">Flota</a>
                            <a href="#contacto">Contacto</a>
                        </div>

                        <div className="footer__column">
                            <h3>Servicios</h3>

                            <span>Cargas generales</span>
                            <span>Cargas a granel</span>
                            <span>Cargas peligrosas</span>
                            <span>Coordinación logística</span>
                        </div>

                        <div className="footer__column footer__column--contact">
                            <h3>Contacto</h3>

                            <a href="tel:+543574455459">
                                <PhoneCall size={16} />
                                03574 45-5459
                            </a>

                            <a href="mailto:transportediaz_rio1@hotmail.com">
                                <Mail size={16} />
                                transportediaz_rio1@hotmail.com
                            </a>

                            <a href={mapsUrl} target="_blank" rel="noreferrer">
                                <MapPin size={16} />
                                Río Primero, Córdoba
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__cta">
                    <div>
                        <Truck size={20} />
                        <span>¿Necesitás coordinar un transporte?</span>
                    </div>

                    <a
                        href="https://wa.me/543574455459?text=Hola%2C%20quiero%20consultar%20por%20un%20transporte%20de%20carga."
                        target="_blank"
                        rel="noreferrer"
                    >
                        Consultar por logística
                        <ArrowUpRight size={17} />
                    </a>
                </div>

                <div className="footer__bottom">
                    <span>© {new Date().getFullYear()} Transportes Díaz S.R.L. Todos los derechos reservados.</span>
                    <span>Río Primero · Córdoba · Argentina</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer