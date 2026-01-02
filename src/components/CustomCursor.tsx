import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorX = useSpring(mousePosition.x, springConfig)
  const cursorY = useSpring(mousePosition.y, springConfig)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: '#fff',
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Trailing cursor */}
      <motion.div
        className="fixed w-10 h-10 rounded-full pointer-events-none z-[9998] border border-white/30"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      />
    </>
  )
}
