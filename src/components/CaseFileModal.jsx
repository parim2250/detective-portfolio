import { useEffect, useState } from 'react'
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi'

export default function CaseFileModal({ project, onClose }) {
  const [open, setOpen] = useState(false)
  const [stamped, setStamped] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setOpen(true))
    const t = setTimeout(() => setStamped(true), 900)
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
      clearTimeout(t)
    }
  }, [])

  const close = () => {
    setOpen(false)
    setTimeout(onClose, 350)
  }

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-all duration-300 ${
        open ? 'bg-black/85 backdrop-blur-sm' : 'bg-black/0'
      }`}
      onClick={close}
    >
      <div
        className={`relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded shadow-2xl transition-all duration-500 ${
          open ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 rotate-2'
        }`}
        onClick={e => e.stopPropagation()}
      >
        {/* Paper background */}
        <div className="paper-bg text-[#2c2c2c] relative">
          {/* Close button */}
          <button
            onClick={close}
            className="hoverable absolute top-4 right-4 z-30 w-8 h-8 flex items-center justify-center bg-[#8b0000]/90 text-white rounded-full hover:bg-[#8b0000] transition-colors"
          >
            <FiX size={14} />
          </button>

          {/* Case Closed stamp */}
          {stamped && project.status === 'SOLVED' && (
            <div
              className="absolute top-10 right-16 z-20 pointer-events-none select-none"
              style={{ animation: 'stampSlam 0.4s ease-out forwards' }}
            >
              <span className="font-stamp text-4xl sm:text-5xl text-green-800/25 border-4 border-green-800/25 px-4 py-1 inline-block rotate-[-15deg]">
                CASE CLOSED
              </span>
            </div>
          )}

          {stamped && project.status === 'ACTIVE' && (
            <div
              className="absolute top-10 right-16 z-20 pointer-events-none select-none"
              style={{ animation: 'stampSlam 0.4s ease-out forwards' }}
            >
              <span className="font-stamp text-4xl sm:text-5xl text-[#8b0000]/25 border-4 border-[#8b0000]/25 px-4 py-1 inline-block rotate-[-15deg]">
                ACTIVE CASE
              </span>
            </div>
          )}

          <div className="p-6 sm:p-10 relative z-10">
            {/* Header */}
            <div className="border-b-2 border-[#2c2c2c]/15 pb-4 mb-6">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#2c2c2c]/35 tracking-[0.3em]">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                CLASSIFIED DOCUMENT
              </div>
              <h2 className="font-typewriter text-2xl sm:text-3xl mt-2 text-[#2c2c2c]">
                CASE FILE #{project.caseNumber}
              </h2>
            </div>

            {/* Details */}
            <div className="space-y-3 font-mono text-sm">
              <div className="grid grid-cols-[110px_1fr] gap-2">
                <span className="text-[#2c2c2c]/40">CASE NAME:</span>
                <span className="font-bold">{project.title}</span>
              </div>
              <div className="grid grid-cols-[110px_1fr] gap-2">
                <span className="text-[#2c2c2c]/40">STATUS:</span>
                <span className={`font-bold ${project.status === 'SOLVED' ? 'text-green-700' : 'text-amber-700'}`}>
                  {project.status === 'SOLVED' ? '✅ ' : '🔄 '}{project.status}
                </span>
              </div>
              <div className="grid grid-cols-[110px_1fr] gap-2">
                <span className="text-[#2c2c2c]/40">DATE FILED:</span>
                <span>{project.date}</span>
              </div>
            </div>

            {/* Evidence images */}
            <div className="mt-8">
              <h3 className="font-typewriter text-base mb-4">📸 EVIDENCE COLLECTED</h3>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-white p-1.5 pb-5 shadow-md" style={{ transform: `rotate(${(i - 2) * 2}deg)` }}>
                    <div className="h-20 sm:h-28 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-3xl">
                      {project.icon}
                    </div>
                    <p className="text-center font-handwritten text-[10px] text-gray-400 mt-1">
                      Exhibit {String.fromCharCode(64 + i)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="mt-8">
              <h3 className="font-typewriter text-base mb-3">📝 INVESTIGATION NOTES</h3>
              <div className="bg-white/40 border-l-4 border-[#8b0000]/20 p-4 font-mono text-sm leading-relaxed text-[#2c2c2c]/70">
                {project.description}
              </div>
            </div>

            {/* Tech */}
            <div className="mt-8">
              <h3 className="font-typewriter text-base mb-3">🔫 WEAPONS USED</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="bg-[#8b0000]/10 text-[#8b0000] border border-[#8b0000]/15 px-3 py-1 font-mono text-[11px] rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer"
                   className="hoverable inline-flex items-center gap-2 bg-[#2c2c2c] text-[#f4e4c1] px-5 py-2.5 font-typewriter text-sm tracking-wider hover:bg-[#2c2c2c]/80 transition-colors rounded-sm">
                  <FiExternalLink size={14} /> LIVE DEMO
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer"
                   className="hoverable inline-flex items-center gap-2 border-2 border-[#2c2c2c]/20 text-[#2c2c2c] px-5 py-2.5 font-typewriter text-sm tracking-wider hover:bg-[#2c2c2c]/5 transition-colors rounded-sm">
                  <FiGithub size={14} /> SOURCE CODE
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}