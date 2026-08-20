import { useState, useEffect } from 'react'

const lines = [
  'ACCESSING CLASSIFIED DATABASE',
  'DECRYPTING CASE FILES',
  'CROSS-REFERENCING EVIDENCE',
  'LOADING SUSPECT PROFILE',
  'ESTABLISHING SECURE CONNECTION',
  'ACCESS GRANTED',
]

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [visibleLines, setVisibleLines] = useState([])

  useEffect(() => {
    const progInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(progInterval); return 100 }
        return prev + 1.5
      })
    }, 40)

    lines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, line])
      }, i * 500)
    })

    return () => clearInterval(progInterval)
  }, [])

  return (
    <div className="fixed inset-0 bg-[#050505] z-[10000] flex flex-col items-center justify-center px-6">
      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)',
        }}
      />

      {/* Scan line moving */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="w-full h-[2px] bg-red-900/20"
          style={{ animation: 'scanline 3s linear infinite' }}
        />
      </div>

      {/* Lock icon */}
      <div className="text-5xl mb-8" style={{ animation: 'flicker 3s infinite' }}>
        🔒
      </div>

      {/* Terminal lines */}
      <div className="w-full max-w-md space-y-2 mb-8">
        {visibleLines.map((line, i) => (
          <div key={i} className="flex items-center gap-2 font-mono text-xs sm:text-sm">
            <span className="text-gray-600">&gt;</span>
            <span className={
              line === 'ACCESS GRANTED'
                ? 'text-green-400 font-bold'
                : 'text-green-400/60'
            }>
              {line}
              {line !== 'ACCESS GRANTED' && (
                <span className="text-green-400/30">
                  {'...'.slice(0, ((Date.now() / 300) % 3) + 1)}
                </span>
              )}
              {line === 'ACCESS GRANTED' && ' ✓'}
            </span>
          </div>
        ))}
        {visibleLines.length < lines.length && (
          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="text-gray-600">&gt;</span>
            <span
              className="w-2 h-4 bg-green-400/60 inline-block"
              style={{ animation: 'blink 0.8s step-end infinite' }}
            />
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-xs">
        <div className="w-full h-[3px] bg-gray-900 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-100 ease-linear"
            style={{
              width: `${Math.min(progress, 100)}%`,
              background: 'linear-gradient(90deg, #8b0000, #cc0000)',
              boxShadow: '0 0 15px rgba(204,0,0,0.5)',
            }}
          />
        </div>
        <div className="text-center mt-2 font-mono text-[10px] text-gray-600 tracking-[0.3em]">
          {Math.min(Math.round(progress), 100)}% COMPLETE
        </div>
      </div>
    </div>
  )
}