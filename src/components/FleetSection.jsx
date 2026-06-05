import { motion } from 'framer-motion'
import { Play, Warehouse } from 'lucide-react'

import imgAerea from '../assets/img/IMG15.JPG'
import imgCamion1 from '../assets/img/IMGCAMION.jpg'
import imgCamion2 from '../assets/img/IMGCAMION2.jpg'
import imgCamion3 from '../assets/img/IMGCAMION3.jpg'
import imgCamion4 from '../assets/img/IMGCAMION4.jpg'
import operationVideo from '../assets/videos/DronMuyArribaCamiones21.mp4'

import '../styles/fleet.css'

const galleryItems = [
    {
        title: 'Predio operativo',
        image: imgAerea,
        size: 'large'
    },
    {
        title: 'Unidades de trabajo',
        image: imgCamion1
    },
    {
        title: 'Carga y traslado',
        image: imgCamion2
    },
    {
        title: 'Operación diaria',
        image: imgCamion3
    },
    {
        title: 'Servicio activo',
        image: imgCamion4
    }
]

function FleetSection() {
    return (
        <section className="fleet" id="flota">
            <div className="fleet__container">
                <motion.div
                    className="fleet__header"
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.35 }}
                >
                    <div className="fleet__eyebrow">
                        <span />
                        Nuestra operación
                    </div>

                    <div className="fleet__title-row">
                        <h2>Movimiento real, estructura propia y logística activa.</h2>

                        <p>
                            Imágenes reales de nuestro trabajo diario: predio, unidades y
                            movimiento operativo para responder a cada necesidad de transporte.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="fleet__video-card"
                    initial={{ opacity: 0, y: 34, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.75, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <video src={operationVideo} autoPlay muted loop playsInline />

                    <div className="fleet__video-overlay" />

                    <div className="fleet__video-content">
                        <div className="fleet__play">
                            <Play size={18} fill="currentColor" />
                        </div>

                        <div>
                            <span>Vista aérea</span>
                            <strong>Operación en movimiento</strong>
                        </div>
                    </div>

                    <div className="fleet__video-chip">
                        <Warehouse size={17} />
                        Predio operativo
                    </div>
                </motion.div>

                <div className="fleet__gallery">
                    {galleryItems.map((item, index) => (
                        <motion.article
                            className={`fleet__item ${item.size === 'large' ? 'fleet__item--large' : ''}`}
                            key={item.title}
                            initial={{ opacity: 0, y: 26 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.07,
                                ease: 'easeOut'
                            }}
                            viewport={{ once: true, amount: 0.25 }}
                        >
                            <img src={item.image} alt={item.title} />

                            <div className="fleet__item-overlay" />

                            <div className="fleet__item-content">
                                <span>{String(index + 1).padStart(2, '0')}</span>
                                <h3>{item.title}</h3>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FleetSection