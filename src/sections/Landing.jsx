import { useState, useEffect } from 'react'

export default function Landing({ onOpenCase }) {
  const [loadIn, setLoadIn] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoadIn(true), 500)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0a09]">
      
      {/* RADAR BACKGROUND */}
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-2000 ${loadIn ? 'opacity-100' : 'opacity-0'}`}>
        {/* Radar Rings */}
        <div className="absolute w-[30vw] h-[30vw] rounded-full border border-[#cca153]/20" />
        <div className="absolute w-[50vw] h-[50vw] rounded-full border border-[#cca153]/10" />
        <div className="absolute w-[70vw] h-[70vw] rounded-full border border-[#cca153]/5" />
        
        {/* Spinning Radar Line */}
        <div className="absolute w-[50vw] h-[50vw] rounded-full animate-[radarSpin_20s_linear_infinite]">
          <div className="w-1/2 h-px bg-gradient-to-r from-transparent to-[#cca153]/40 absolute top-1/2 left-1/2 origin-left" />
        </div>
      </div>

      {/* CONNECTING RED LINES (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-[2]">
        {/* Line to top right note */}
        <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="#8b0000" strokeWidth="1" opacity="0.6" strokeDasharray="4 4" />
        {/* Line to bottom left note */}
        <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="#8b0000" strokeWidth="1" opacity="0.6" />
        {/* Line to left note */}
        <line x1="50%" y1="50%" x2="15%" y2="40%" stroke="#8b0000" strokeWidth="1" opacity="0.6" />
      </svg>

      {/* FLOATING NODES (DOCUMENTS) */}
      <div className={`absolute inset-0 z-[3] transition-all duration-1000 ${loadIn ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        
        {/* Top Right Node */}
        <div className="absolute top-[15%] right-[10%] bg-[#1a1714] border border-[#cca153]/20 p-4 max-w-[200px] shadow-2xl">
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#8b0000] rounded-full" />
          <p className="font-mono text-[10px] text-[#cca153]/70 uppercase tracking-widest mb-2">Subject Status</p>
          <p className="font-playfair text-sm text-[#e6d5aa] italic">"The code traces point directly to this dossier..."</p>
        </div>

        {/* Left Node */}
        <div className="absolute top-[35%] left-[5%] bg-[#1a1714] border border-[#cca153]/20 p-4 max-w-[200px] shadow-2xl">
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#8b0000] rounded-full" />
          <p className="font-mono text-[9px] text-[#cca153]/50 uppercase tracking-widest mb-1">Clearance Level</p>
          <p className="font-mono text-sm text-white">LEVEL 5 — ACTIVE</p>
        </div>

        {/* Bottom Left Node */}
        <div className="absolute bottom-[15%] left-[15%] bg-[#1a1714] border border-[#cca153]/20 p-5 max-w-[240px] shadow-2xl">
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#8b0000] rounded-full" />
          <p className="font-mono text-[10px] text-[#cca153]/70 uppercase tracking-widest mb-2">Last Known Location</p>
          <p className="font-mono text-xs text-[#e6d5aa] leading-relaxed">System logs indicate heavy frontend activity in sector 4.</p>
        </div>
      </div>

      {/* CENTER MASSIVE TEXT */}
      <div className={`relative z-10 flex flex-col items-center transition-all duration-1000 ${loadIn ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        
        <div className="border border-[#cca153]/30 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm bg-black/20">
          <p className="font-mono text-[9px] tracking-[0.3em] text-[#cca153]">CLASSIFICATION: LEVEL 5 — ACTIVE</p>
        </div>

        <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl text-[#cca153] text-center leading-[0.9] drop-shadow-[0_0_30px_rgba(204,161,83,0.2)]">
          Pari <br />
          Mittal
        </h1>

        <p className="mt-8 font-mono text-xs md:text-sm tracking-[0.4em] text-[#cca153]/70 text-center uppercase">
          Digital Investigator — Frontend Developer
        </p>

        <p className="mt-6 font-playfair text-lg md:text-xl text-white/80 italic text-center">
          "Deduce precisely. Code flawlessly."
        </p>

        {/* Action Buttons (Pill shaped, sleek) */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button 
            onClick={onOpenCase}
            className="px-8 py-3 bg-[#cca153] text-[#0c0a09] font-mono text-xs tracking-[0.2em] font-bold hover:bg-[#e6d5aa] transition-colors shadow-[0_0_20px_rgba(204,161,83,0.3)]"
          >
            OPEN CASE FILE
          </button>
        </div>
      </div>

    </section>
  )
}