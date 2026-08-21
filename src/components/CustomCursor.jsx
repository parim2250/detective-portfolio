import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if ('ontouchstart' in window) return
    const move = (e) => { setPos({ x: e.clientX, y: e.clientY }); setVisible(true) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  if (!visible) return null

  return (
    <>
      {/* Scanner Crosshair Cursor */}
      <div 
        className="fixed pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
        style={{ left: pos.x, top: pos.y, transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-6 h-6 border border-[#cca153]/50 rounded-full flex items-center justify-center">
          <div className="w-1 h-1 bg-[#cca153] rounded-full" />
        </div>
        {/* Crosshair lines */}
        <div className="absolute w-10 h-[1px] bg-[#cca153]/30" />
        <div className="absolute h-10 w-[1px] bg-[#cca153]/30" />
      </div>

      {/* Stronger, warmer flashlight effect */}
      <div
        className="fixed pointer-events-none z-[1] hidden md:block"
        style={{
          left: pos.x - 250,
          top: pos.y - 250,
          width: 500,
          height: 500,
          /* Much more visible, warm gold glow */
          background: 'radial-gradient(circle, rgba(204,161,83,0.12) 0%, rgba(204,161,83,0.03) 40%, transparent 70%)',
        }}
      />
    </>
  )
}