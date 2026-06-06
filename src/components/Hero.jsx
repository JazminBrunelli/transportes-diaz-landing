import { ArrowRight } from 'lucide-react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import heroVideo from '../assets/videos/VideoCompletoDronDiaz233.mp4'
import '../styles/hero.css'

function Hero() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const videoX = useTransform(mouseX, [-400, 400], [-10, 10])
    const videoY = useTransform(mouseY, [-400, 400], [-7, 7])

    const chipX = useTransform(mouseX, [-400, 400], [10, -10])
    const chipY = useTransform(mouseY, [-400, 400], [8, -8])

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect()

        mouseX.set(event.clientX - rect.left - rect.width / 2)
        mouseY.set(event.clientY - rect.top - rect.height / 2)
    }

    return (
        <section className="hero hero--video" id="inicio" onMouseMove={handleMouseMove}>
            <motion.div className="hero__video-layer" style={{ x: videoX, y: videoY }}>
                <video src={heroVideo} autoPlay muted loop playsInline />
            </motion.div>

            <div className="hero__video-overlay" />
            <div className="hero__soft-grid" />

            <div className="hero__route-lines">
                <span className="hero__route-line hero__route-line--one" />
                <span className="hero__route-line hero__route-line--two" />
                <span className="hero__route-line hero__route-line--three" />
            </div>

            <div className="hero__map-points">
                <span className="hero__map-point hero__map-point--one" />
                <span className="hero__map-point hero__map-point--two" />
                <span className="hero__map-point hero__map-point--three" />
            </div>

            <div className="hero__container hero__container--video">
                <motion.div
                    className="hero__content"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, ease: 'easeOut' }}
                >
                    <div className="hero__eyebrow">
                        <span />
                        Transporte · Logística · Flota propia
                    </div>

                    <h1>
                        Movemos carga.
                        <span>Llevamos confianza.</span>
                    </h1>

                    <p>
                        Soluciones logísticas para cargas generales, oleaginosas a granel y cargas peligrosas.
                    </p>

                    <div className="hero__actions">
                        <a
                            href="https://wa.me/543574455459"
                            target="_blank"
                            rel="noreferrer"
                            className="hero__button hero__button--primary"
                        >
                            Solicitar presupuesto
                            <ArrowRight size={18} />
                        </a>

                        <a href="#servicios" className="hero__button hero__button--secondary">
                            Ver servicios
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero__location-tag"
                    style={{ x: chipX, y: chipY }}
                    initial={{ opacity: 0, y: 28, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
                >
                    <div className="hero__location-dot" />

                    <div className="hero__location-content">
                        <span>Río Primero, Córdoba</span>
                        <strong>Flota propia en movimiento</strong>
                    </div>

                    <div className="hero__location-line" />
                </motion.div>
            </div>

            <div className="hero__bottom-strip">
                <span>Flota propia</span>
                <span>Unidades modernas</span>
                <span>Atención personalizada</span>
                <span>Compromiso en ruta</span>
            </div>
        </section>
    )
}

export default Hero