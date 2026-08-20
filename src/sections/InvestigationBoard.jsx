import { useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeader from '../components/SectionHeader'
import CaseFileModal from '../components/CaseFileModal'
import { projects } from '../data/projects'

const pinColors = ['bg-red-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500', 'bg-red-600', 'bg-purple-500']
const tilts = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', 'rotate-0', '-rotate-2']

export default function InvestigationBoard() {
  const ref = useRef(null)
  const visible = useScrollReveal(ref, 0.08)
  const [selected, setSelected] = useState(null)

  return (
    <section id="cases" ref={ref} className="relative py-28 sm:py-36 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="SECTION 02"
          title="INVESTIGATION BOARD"
          subtitle="Click any case file to examine the evidence"
          visible={visible}
        />

        {/* The Cork Board */}
        <div className={`mt-14 transition-all duration-1000 delay-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="cork-bg rounded-lg p-6 sm:p-10 relative border-[6px] sm:border-8 border-amber-900/50 shadow-2xl shadow-black/40 overflow-hidden">
            {/* Inner shadow */}
            <div className="absolute inset-0 rounded shadow-[inset_0_0_60px_rgba(0,0,0,0.35)] pointer-events-none z-[8]" />

            {/* SVG Red Strings */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-[5]" preserveAspectRatio="none">
              {/* Horizontal connections */}
              <line x1="20%" y1="30%" x2="50%" y2="28%" stroke="#cc0000" strokeWidth="1.2" opacity={visible ? "0.4" : "0"}
                style={{ transition: 'opacity 2s ease 1s' }} />
              <line x1="50%" y1="28%" x2="80%" y2="32%" stroke="#cc0000" strokeWidth="1.2" opacity={visible ? "0.4" : "0"}
                style={{ transition: 'opacity 2s ease 1.3s' }} />
              {/* Vertical connections */}
              <line x1="20%" y1="30%" x2="35%" y2="72%" stroke="#cc0000" strokeWidth="1.2" opacity={visible ? "0.35" : "0"}
                style={{ transition: 'opacity 2s ease 1.5s' }} />
              <line x1="50%" y1="28%" x2="65%" y2="72%" stroke="#cc0000" strokeWidth="1.2" opacity={visible ? "0.35" : "0"}
                style={{ transition: 'opacity 2s ease 1.8s' }} />
              <line x1="80%" y1="32%" x2="80%" y2="72%" stroke="#cc0000" strokeWidth="1.2" opacity={visible ? "0.35" : "0"}
                style={{ transition: 'opacity 2s ease 2s' }} />
            </svg>

            {/* Project Cards */}
            <div className="relative z-[6] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, i) => (
                <div
                  key={project.id}
                  onClick={() => setSelected(project)}
                  className={`hoverable relative cursor-pointer group transition-all duration-500 ${tilts[i % tilts.length]} hover:rotate-0 hover:scale-105 hover:z-20`}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? undefined : 'translateY(25px)',
                    transition: `opacity 0.6s ease ${i * 150}ms, transform 0.6s ease ${i * 150}ms`,
                  }}
                >
                  {/* Push pin */}
                  <div className={`push-pin ${pinColors[i % pinColors.length]}`} />

                  {/* Card */}
                  <div className="bg-white shadow-lg group-hover:shadow-2xl transition-shadow overflow-hidden">
                    {/* Image area */}
                    <div className="h-36 sm:h-40 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl opacity-40">
                        {project.icon}
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[#8b0000]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white font-typewriter text-xs tracking-[0.2em]">
                          🔍 EXAMINE EVIDENCE
                        </span>
                      </div>
                    </div>

                    {/* Info area */}
                    <div className="p-4 bg-[#faf4e8]">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-mono text-[9px] text-gray-400 tracking-wider">
                          CASE #{project.caseNumber}
                        </span>
                        <span className={`text-[9px] font-mono px-2 py-0.5 rounded-sm font-bold ${
                          project.status === 'SOLVED'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <h3 className="font-typewriter text-gray-800 text-sm font-bold leading-snug">
                        {project.title}
                      </h3>
                      <p className="font-mono text-[10px] text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                        {project.shortDesc}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {project.tech.slice(0, 3).map(t => (
                          <span key={t} className="text-[8px] font-mono bg-gray-200 text-gray-500 px-1.5 py-0.5 rounded-sm">
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-[8px] font-mono text-gray-400">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Tape on top */}
                  <div className="tape-strip top-[-4px] left-1/2 -translate-x-1/2 rotate-[-3deg]" />
                </div>
              ))}
            </div>

            {/* Board decorations */}
            <div className="absolute bottom-4 left-6 font-handwritten text-amber-900/30 text-sm rotate-[-4deg] pointer-events-none z-[7]">
              "Check connections between projects..."
            </div>
            <div className="absolute top-4 right-6 font-handwritten text-amber-900/20 text-xs rotate-[3deg] pointer-events-none z-[7]">
              UPDATED: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>

      {selected && (
        <CaseFileModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}