import { useState, useEffect, useRef } from 'react'

export default function Landing({ onOpenCase }) {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const [revealed, setRevealed] = useState(0)
  const [showBtn, setShowBtn] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const timers = []
    for (let i = 1; i <= 5; i++) {
      timers.push(setTimeout(() => setRevealed(i), i * 400))
    }
    timers.push(setTimeout(() => setShowBtn(true), 2800))
    return () => timers.forEach(clearTimeout)
  }, [])

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `radial-gradient(circle 350px at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255,200,100,0.06) 0%, rgba(10,10,10,1) 100%)`,
      }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating icons */}
      {['📎', '🔍', '📋', '🕵️'].map((icon, i) => (
        <div
          key={i}
          className="absolute text-4xl sm:text-5xl opacity-[0.06] select-none"
          style={{
            top: `${15 + i * 20}%`,
            left: i % 2 === 0 ? '8%' : '82%',
            animation: `float ${5 + i}s ease-in-out infinite`,
            animationDelay: `${i * 1.2}s`,
          }}
        >
          {icon}
        </div>
      ))}

      {/* Main Card */}
      <div className="relative z-10 max-w-lg w-full mx-4">
        <div className="relative">

          {/* TOP SECRET stamp */}
          <div
            className="absolute -top-3 -right-3 z-20 pointer-events-none select-none"
            style={{
              opacity: revealed >= 4 ? 1 : 0,
              animation: revealed >= 4 ? 'stampSlam 0.4s ease-out forwards' : 'none',
            }}
          >
            <span className="font-stamp text-2xl sm:text-3xl text-[#8b0000] border-[3px] border-[#8b0000] px-3 py-0.5 inline-block rotate-[12deg]">
              TOP SECRET
            </span>
          </div>

          {/* The card */}
          <div className="paper-bg text-[#2c2c2c] rounded-sm p-7 sm:p-10 shadow-2xl shadow-black/50 relative overflow-hidden">

            {/* Coffee stain */}
            <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full opacity-[0.12] pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse, transparent 35%, rgba(101,67,33,0.25) 40%, rgba(101,67,33,0.1) 55%, transparent 60%)',
              }}
            />

            {/* Header */}
            <div className="border-b-2 border-[#2c2c2c]/15 pb-4 mb-6">
              <div className="font-mono text-[9px] text-[#2c2c2c]/30 tracking-[0.4em]">
                FEDERAL BUREAU OF DEVELOPMENT
              </div>
              <h1 className="font-typewriter text-3xl sm:text-4xl mt-2 text-[#2c2c2c]">
                CASE FILE
              </h1>
              <div className="font-mono text-lg text-[#8b0000] mt-0.5">
                #2024-PORTFOLIO
              </div>
            </div>

            {/* Fields - reveal one by one */}
            <div className="space-y-3 font-mono text-sm">
              {revealed >= 1 && (
                <div className="flex gap-3" style={{ animation: 'revealUp 0.5s ease forwards' }}>
                  <span className="text-[#2c2c2c]/35 min-w-[100px]">SUBJECT:</span>
                  {/* ✏️ WRITE YOUR NAME HERE */}
                  <span className="font-bold text-[#2c2c2c]">YOUR FULL NAME</span>
                </div>
              )}
              {revealed >= 2 && (
                <div className="flex gap-3" style={{ animation: 'revealUp 0.5s ease forwards' }}>
                  <span className="text-[#2c2c2c]/35 min-w-[100px]">ALIAS:</span>
                  {/* ✏️ WRITE YOUR TITLE HERE */}
                  <span className="font-handwritten text-[#1a3a5c] text-lg">"Full Stack Developer"</span>
                </div>
              )}
              {revealed >= 3 && (
                <div className="flex gap-3" style={{ animation: 'revealUp 0.5s ease forwards' }}>
                  <span className="text-[#2c2c2c]/35 min-w-[100px]">STATUS:</span>
                  <span className="text-[#8b0000] font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    UNDER INVESTIGATION
                  </span>
                </div>
              )}
              {revealed >= 4 && (
                <div className="flex gap-3" style={{ animation: 'revealUp 0.5s ease forwards' }}>
                  <span className="text-[#2c2c2c]/35 min-w-[100px]">CLEARANCE:</span>
                  <span className="text-[#2c2c2c]">LEVEL 5 — CLASSIFIED</span>
                </div>
              )}
            </div>

            {/* Handwritten note */}
            {revealed >= 5 && (
              <div className="mt-6 font-handwritten text-[#1a3a5c] text-lg rotate-[-1deg]"
                   style={{ animation: 'revealUp 0.5s ease forwards' }}>
                {/* ✏️ WRITE A SHORT TAGLINE HERE */}
                "This one's different. Check the evidence." — Chief
              </div>
            )}

            {/* Button */}
            {showBtn && (
              <div className="mt-8" style={{ animation: 'revealUp 0.6s ease forwards' }}>
                <button
                  onClick={onOpenCase}
                  className="hoverable w-full py-4 bg-[#8b0000] text-[#f4e4c1] font-typewriter text-base sm:text-lg tracking-[0.15em] rounded-sm hover:bg-[#6b0000] transition-all duration-300 active:scale-[0.98] relative overflow-hidden group"
                  style={{ animation: 'glowPulse 2s ease-in-out infinite' }}
                >
                  <span className="relative z-10">[ OPEN CASE FILE ]</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_0.8s_ease]" />
                </button>
              </div>
            )}
          </div>

          {/* Stacked paper beneath */}
          <div className="absolute -bottom-1.5 left-3 right-3 h-3 bg-[#e8d8b8] rounded-b-sm -z-10 shadow-md" />
          <div className="absolute -bottom-3 left-6 right-6 h-3 bg-[#dcc8a8] rounded-b-sm -z-20 shadow-md" />
        </div>
      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-gray-600 animate-pulse tracking-[0.2em]">
        ▼ BEGIN INVESTIGATION ▼
      </div>
    </section>
  )
}