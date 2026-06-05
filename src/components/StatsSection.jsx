import { motion } from 'framer-motion'
import { CalendarDays, Globe2, PackageCheck, Route } from 'lucide-react'

import ivecoLogo from '../assets/brands/iveco.svg'
import michelinLogo from '../assets/brands/michelin-logo-5.png'
import scaniaLogo from '../assets/brands/scania-logo-1.png'
import mercedesLogo from '../assets/brands/mercedes.png'

import '../styles/stats.css'

const stats = [
    {
        value: '2006',
        label: 'Año de inicio',
        icon: CalendarDays
    },
    {
        value: '+10.000',
        label: 'Viajes realizados',
        icon: Route
    },
    {
        value: '3',
        label: 'Tipos de carga',
        icon: PackageCheck
    },
    {
        value: 'Argentina',
        label: 'Cobertura nacional',
        icon: Globe2
    }
]

const brands = [
    {
        name: 'IVECO',
        logo: ivecoLogo,
        url: 'https://www.iveco.com/'
    },
    {
        name: 'Michelin',
        logo: michelinLogo,
        url: 'https://www.michelin.com/'
    },
    {
        name: 'Scania',
        logo: scaniaLogo,
        url: 'https://www.scania.com/'
    },
    {
        name: 'Mercedes-Benz',
        logo: mercedesLogo,
        url: 'https://www.mercedes-benz.com/'
    }
]

function StatsSection() {
    return (
        <section className="stats" id="trayectoria">
            <div className="stats__glow stats__glow--one" />
            <div className="stats__glow stats__glow--two" />

            <div className="stats__container">
                <motion.div
                    className="stats__header"
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.35 }}
                >
                    <div className="stats__eyebrow">
                        <span />
                        Trayectoria
                    </div>

                    <div className="stats__title-row">
                        <h2>Experiencia que se construye en cada viaje.</h2>

                        <p>
                            Cada recorrido representa años de trabajo, compromiso y confianza.
                            Una empresa familiar que creció acompañando a sus clientes con
                            responsabilidad en cada carga.
                        </p>
                    </div>
                </motion.div>

                <div className="stats__layout">
                    <motion.div
                        className="stats__story"
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.35 }}
                    >
                        <span>Desde 2006</span>
                        <strong>Transportamos confianza por todo el país.</strong>
                        <p>
                            La experiencia de cada viaje nos permite seguir creciendo con la
                            misma base de siempre: seriedad, constancia y trato directo.
                        </p>
                    </motion.div>

                    <div className="stats__row">
                        {stats.map((item, index) => {
                            const Icon = item.icon

                            return (
                                <motion.div
                                    className="stats__mini"
                                    key={item.label}
                                    initial={{ opacity: 0, y: 22 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.08,
                                        ease: 'easeOut'
                                    }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <Icon size={18} />
                                    <strong>{item.value}</strong>
                                    <span>{item.label}</span>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                <motion.div
                    className="stats__brands"
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.35 }}
                >
                    <div className="stats__brands-header">
                        <span />
                        <strong>Marcas que acompañan nuestra operación</strong>
                    </div>

                    <div className="stats__brand-grid">
                        {brands.map((brand) => (
                            <a
                                className="stats__brand-card"
                                href={brand.url}
                                target="_blank"
                                rel="noreferrer"
                                key={brand.name}
                                aria-label={`Ir al sitio de ${brand.name}`}
                            >
                                <img src={brand.logo} alt={brand.name} />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default StatsSection