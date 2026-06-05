import { useEffect, useState } from 'react'
import '../styles/mouse-glow.css'

function MouseGlow() {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX,
                y: event.clientY
            })
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <div
            className="mouse-glow"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        />
    )
}

export default MouseGlow