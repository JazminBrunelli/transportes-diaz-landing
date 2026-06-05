import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowRight, Boxes, CheckCircle2, ShieldAlert, Wheat, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/services.css'

const services = [
    {
        number: '01',
        title: 'Cargas generales',
        description:
            'Transporte de mercadería, insumos y cargas diversas, con coordinación personalizada según cada operación.',
        icon: Boxes,
        modalTitle: 'Transporte de cargas generales',
        modalSubtitle:
            'Soluciones para mercadería e insumos que no requieren condiciones técnicas especiales.',
        detail:
            'Las cargas generales abarcan distintos tipos de mercadería que, por lo general, no requieren documentación especial, una unidad con características específicas o parámetros técnicos particulares. Suelen transportarse para empresas con rubros definidos y pueden presentarse en pallets, bolsas, bultos u otros formatos, según la necesidad de cada operación.',
        bullets: [
            'Mercadería, insumos y productos de distintos rubros.',
            'Cargas que no requieren condiciones especiales de transporte.',
            'Coordinación según origen, destino y tipo de envío.',
            'Servicio adaptable a empresas y operaciones habituales.'
        ]
    },
    {
        number: '02',
        title: 'Oleaginosas a granel',
        description:
            'Traslado de productos agrícolas a granel, acompañando al sector productivo con eficiencia y responsabilidad.',
        icon: Wheat,
        modalTitle: 'Transporte de oleaginosas a granel',
        modalSubtitle:
            'Traslado de productos del campo, transportados en unidades preparadas para carga a granel.',
        detail:
            'Las oleaginosas y cargas agrícolas a granel hacen referencia a productos derivados del campo, como soja, girasol, trigo y otros granos utilizados para producción. En este tipo de transporte, el producto se carga por la parte superior de la unidad y se traslada con puertas cerradas, cuidando la capacidad, la seguridad y las condiciones del viaje.',
        bullets: [
            'Soja, girasol, trigo y otros productos agrícolas.',
            'Carga a granel mediante unidades preparadas para este tipo de traslado.',
            'Servicio orientado al sector agropecuario y productivo.',
            'Uno de los principales tipos de transporte realizados por la empresa.'
        ]
    },
    {
        number: '03',
        title: 'Cargas peligrosas',
        description:
            'Servicio para cargas que requieren mayor control, cuidado y cumplimiento de medidas de seguridad.',
        icon: ShieldAlert,
        modalTitle: 'Transporte de cargas peligrosas',
        modalSubtitle:
            'Servicio para productos que requieren unidades habilitadas, control y medidas específicas de seguridad.',
        detail:
            'Las cargas peligrosas son productos catalogados como riesgosos por sus características, como fertilizantes, agroquímicos u otros materiales que pueden ser tóxicos, inflamables o volátiles. Para este tipo de transporte se requieren unidades homologadas, identificaciones correspondientes, revisiones técnicas específicas y choferes capacitados con habilitaciones vigentes.',
        bullets: [
            'Productos catalogados como peligrosos, tóxicos, inflamables o volátiles.',
            'Unidades habilitadas y correctamente identificadas.',
            'Revisiones técnicas y controles específicos.',
            'Choferes capacitados para operar este tipo de carga.'
        ]
    }
]

function ServicesSection() {
    const [selectedService, setSelectedService] = useState(null)

    const closeModal = () => {
        setSelectedService(null)
    }

    useEffect(() => {
        if (!selectedService) return

        const originalBodyOverflow = document.body.style.overflow
        const originalHtmlOverflow = document.documentElement.style.overflow

        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeModal()
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = originalBodyOverflow
            document.documentElement.style.overflow = originalHtmlOverflow
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [selectedService])

    const modal = (
        <AnimatePresence>
            {selectedService && (
                <motion.div
                    className="service-modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeModal}
                >
                    <motion.div
                        className="service-modal__content"
                        initial={{ opacity: 0, y: 24, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 18, scale: 0.97 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="service-modal__close"
                            onClick={closeModal}
                            aria-label="Cerrar detalle"
                        >
                            <X size={20} />
                        </button>

                        <div className="service-modal__head">
                            <div className="service-modal__icon">
                                {(() => {
                                    const Icon = selectedService.icon
                                    return <Icon size={26} />
                                })()}
                            </div>

                            <div>
                                <span>{selectedService.number}</span>
                                <h3>{selectedService.modalTitle}</h3>
                            </div>
                        </div>

                        <p className="service-modal__subtitle">
                            {selectedService.modalSubtitle}
                        </p>

                        <p className="service-modal__text">
                            {selectedService.detail}
                        </p>

                        <div className="service-modal__list">
                            {selectedService.bullets.map((bullet) => (
                                <div key={bullet}>
                                    <CheckCircle2 size={18} />
                                    <span>{bullet}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )

    return (
        <>
            <section className="services" id="servicios">
                <div className="services__container">
                    <motion.div
                        className="services__header"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.35 }}
                    >
                        <div className="services__eyebrow">
                            <span />
                            Servicios
                        </div>

                        <h2>Soluciones logísticas para cada tipo de carga.</h2>

                        <p>
                            Brindamos servicios de transporte adaptados a las necesidades de cada cliente,
                            con experiencia, coordinación y atención personalizada.
                        </p>
                    </motion.div>

                    <div className="services__grid">
                        {services.map((service, index) => {
                            const Icon = service.icon

                            return (
                                <motion.article
                                    className="service-card"
                                    key={service.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        ease: 'easeOut'
                                    }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <div className="service-card__top">
                                        <span>{service.number}</span>

                                        <div className="service-card__icon">
                                            <Icon size={22} />
                                        </div>
                                    </div>

                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>

                                    <button
                                        type="button"
                                        className="service-card__footer"
                                        onClick={() => setSelectedService(service)}
                                    >
                                        <span>Ver detalle</span>
                                        <ArrowRight size={17} />
                                    </button>
                                </motion.article>
                            )
                        })}
                    </div>
                </div>
            </section>

            {typeof document !== 'undefined' && createPortal(modal, document.body)}
        </>
    )
}

export default ServicesSection