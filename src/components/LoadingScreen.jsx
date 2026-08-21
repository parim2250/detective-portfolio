import { useState, useEffect } from 'react'

const lines = [
  'INITIATING SECURE PROTOCOL...',
  'BYPASSING FIREWALL...',
  'DECRYPTING AGENCY DOSSIER...',
  'LOADING CLASSIFIED ASSETS...',
  'ACCESS GRANTED.'
]

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [visibleLines, setVisibleLines] = useState([])

  useEffect(() => {
    const progInterval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 100 : prev + 1.2))
    }, 30)

    lines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(prev => [...prev, line]), i * 400)
    })

    return () => clearInterval(progInterval)
  }, [])

  return (
    <div className="fixed inset-0 bg-[#0c0a09] z-[10000] flex flex-col items-center justify-center px-6">
      {/* Sleek geometric loader instead of a lock */}
      <div className="relative w-16 h-16 mb-12">
        <div className="absolute inset-0 border-t-2 border-l-2 border-[#cca153] rounded-full animate-spin" />
        <div className="absolute inset-2 border-b-2 border-r-2 border-[#8b0000] rounded-full animate-[spin_2s_linear_infinite_reverse]" />
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-[#cca153]">
          {Math.floor(progress)}%
        </div>
      </div>

      {/* Terminal text in gold/bronze */}
      <div className="w-full max-w-md space-y-2 mb-8">
        {visibleLines.map((line, i) => (
          <div key={i} className="flex items-center gap-3 font-mono text-xs text-[#cca153]">
            <span className="opacity-50">System //</span>
            <span className={line === 'ACCESS GRANTED.' ? 'text-white' : 'opacity-80'}>
              {line}
            </span>
          </div>
        ))}
      </div>

      {/* Thin, elegant progress bar */}
      <div className="w-full max-w-xs h-px bg-[#cca153]/20 relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-[#cca153] shadow-[0_0_10px_#cca153]"
          style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
        />
      </div>
    </div>
  )
}