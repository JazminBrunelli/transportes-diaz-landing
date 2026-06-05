import { motion } from 'framer-motion'
import {
    ArrowUpRight,
    Clock,
    Mail,
    MapPin,
    Navigation,
    PhoneCall,
    Send,
    Truck
} from 'lucide-react'
import '../styles/contact.css'

const mapsUrl =
    'https://www.google.com/maps/place/Transportes+Diaz+S.R.L/@-31.3290884,-63.6358583,17z/data=!4m6!3m5!1s0x9432df00034e630f:0x72886e521b66542!8m2!3d-31.32909!4d-63.6338072!16s%2Fg%2F11xvvrtm7p?entry=ttu'

const logisticsWhatsapp =
    'https://wa.me/543574455459?text=Hola%2C%20quiero%20consultar%20por%20un%20transporte%20de%20carga.'

const administrationWhatsapp =
    'https://wa.me/543574406790?text=Hola%2C%20quiero%20realizar%20una%20consulta%20administrativa.'

function ContactSection() {
    return (
        <section className="contact" id="contacto">
            <div className="contact__glow contact__glow--one" />
            <div className="contact__glow contact__glow--two" />

            <div className="contact__container">
                <motion.div
                    className="contact__content"
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.35 }}
                >
                    <div className="contact__eyebrow">
                        <span />
                        Contacto
                    </div>

                    <h2>Coordinemos tu próximo transporte.</h2>

                    <p>
                        Estamos en Río Primero, Córdoba. Contactanos para consultar por
                        cargas, destinos, disponibilidad o coordinación logística.
                    </p>

                    <div className="contact__cards">
                        <a
                            href={logisticsWhatsapp}
                            target="_blank"
                            rel="noreferrer"
                            className="contact__card contact__card--primary"
                        >
                            <div className="contact__icon">
                                <Truck size={20} />
                            </div>

                            <div>
                                <span>Logística</span>
                                <strong>03574 45-5459</strong>
                            </div>

                            <ArrowUpRight size={18} />
                        </a>

                        <a
                            href={administrationWhatsapp}
                            target="_blank"
                            rel="noreferrer"
                            className="contact__card"
                        >
                            <div className="contact__icon">
                                <PhoneCall size={20} />
                            </div>

                            <div>
                                <span>Administración</span>
                                <strong>+54 3574 406790</strong>
                            </div>

                            <ArrowUpRight size={18} />
                        </a>

                        <a
                            href="mailto:transportediaz_rio1@hotmail.com"
                            className="contact__card"
                        >
                            <div className="contact__icon">
                                <Mail size={20} />
                            </div>

                            <div>
                                <span>Correo</span>
                                <strong>transportediaz_rio1@hotmail.com</strong>
                            </div>

                            <ArrowUpRight size={18} />
                        </a>

                        <div className="contact__card contact__card--static">
                            <div className="contact__icon">
                                <Clock size={20} />
                            </div>

                            <div>
                                <span>Horario de oficina</span>
                                <strong>Lunes a viernes · 9:00 a 17:00 hs</strong>
                                <small>Fines de semana con cita previa.</small>
                            </div>
                        </div>
                    </div>

                    <div className="contact__actions">
                        <a href={mapsUrl} target="_blank" rel="noreferrer">
                            <Navigation size={18} />
                            Cómo llegar
                        </a>

                        <a href={logisticsWhatsapp} target="_blank" rel="noreferrer">
                            <Send size={18} />
                            Consultar por WhatsApp
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="contact__map-wrap"
                    initial={{ opacity: 0, scale: 0.96, y: 34 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.75, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.35 }}
                >
                    <div className="contact__map-top">
                        <div>
                            <MapPin size={19} />
                            <span>Río Primero, Córdoba</span>
                        </div>

                        <a href={mapsUrl} target="_blank" rel="noreferrer">
                            Ver en Maps
                            <ArrowUpRight size={16} />
                        </a>
                    </div>

                    <div className="contact__map">
                        <iframe
                            title="Ubicación Transportes Díaz S.R.L."
                            src="https://www.google.com/maps?q=Transportes%20Diaz%20S.R.L%20Rio%20Primero%20Cordoba&output=embed"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <div className="contact__location-card">
                        <div className="contact__pin">
                            <MapPin size={22} />
                        </div>

                        <div>
                            <span>Encontranos acá</span>
                            <strong>Transportes Díaz S.R.L.</strong>
                            <p>Río Primero, Córdoba · Argentina</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactSection