import { motion, useMotionValue, useTransform } from 'framer-motion'
import { BriefcaseBusiness, CalendarCheck, Handshake, Route } from 'lucide-react'

import empresaImg from '../assets/img/empresaDiaz.JPG'
import oficinaImg from '../assets/img/OficinaAfueraCerca.jpg'
import empresaAfueraImg from '../assets/img/EmpresaAfuera.JPG'

import '../styles/about.css'

function AboutSection() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const mainX = useTransform(mouseX, [-300, 300], [-6, 6])
    const mainY = useTransform(mouseY, [-300, 300], [-5, 5])

    const smallX = useTransform(mouseX, [-300, 300], [7, -7])
    const smallY = useTransform(mouseY, [-300, 300], [5, -5])

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect()

        mouseX.set(event.clientX - rect.left - rect.width / 2)
        mouseY.set(event.clientY - rect.top - rect.height / 2)
    }

    return (
        <section className="about" id="empresa" onMouseMove={handleMouseMove}>
            <div className="about__glow about__glow--one" />
            <div className="about__glow about__glow--two" />

            <div className="about__container">
                <motion.div
                    className="about__content"
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.35 }}
                >
                    <div className="about__eyebrow">
                        <span />
                        Sobre Transportes Díaz S.R.L.
                    </div>

                    <h2>
                        Empresa familiar con más de dos décadas de experiencia.
                    </h2>

                    <p>
                        Transportes Díaz S.R.L. es una empresa familiar con más de dos
                        décadas de experiencia en el sector del transporte de cargas
                        generales. Trabajamos con seriedad, compromiso y atención
                        personalizada para acompañar a cada cliente con soluciones
                        logísticas confiables.
                    </p>

                    <div className="about__features">
                        <div>
                            <BriefcaseBusiness size={20} />
                            <strong>Empresa familiar</strong>
                            <span>Trabajo, constancia y compromiso como base de crecimiento.</span>
                        </div>

                        <div>
                            <CalendarCheck size={20} />
                            <strong>Más de 20 años</strong>
                            <span>Experiencia en el transporte de cargas generales.</span>
                        </div>

                        <div>
                            <Route size={20} />
                            <strong>Cargas generales</strong>
                            <span>Soluciones logísticas adaptadas a cada necesidad.</span>
                        </div>

                        <div>
                            <Handshake size={20} />
                            <strong>Atención cercana</strong>
                            <span>Trato directo, acompañamiento y responsabilidad.</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="about__visual"
                    initial={{ opacity: 0, scale: 0.96, y: 34 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.75, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.35 }}
                >
                    <motion.div className="about__main-image" style={{ x: mainX, y: mainY }}>
                        <img src={empresaImg} alt="Predio y flota de Transportes Díaz" />
                    </motion.div>

                    <motion.div
                        className="about__small-image about__small-image--one"
                        style={{ x: smallX, y: smallY }}
                    >
                        <img src={oficinaImg} alt="Oficina de Transportes Díaz" />
                    </motion.div>

                    <motion.div
                        className="about__small-image about__small-image--two"
                        style={{ x: smallX, y: smallY }}
                    >
                        <img src={empresaAfueraImg} alt="Ingreso a Transportes Díaz" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutSection