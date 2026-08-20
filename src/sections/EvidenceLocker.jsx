import { useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeader from '../components/SectionHeader'
import { skills } from '../data/skills'

export default function EvidenceLocker() {
  const ref = useRef(null)
  const visible = useScrollReveal(ref, 0.15)
  const [openBag, setOpenBag] = useState(0) // first one open by default

  return (
    <section id="evidence" ref={ref} className="relative py-28 sm:py-36 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="SECTION 03"
          title="EVIDENCE LOCKER"
          subtitle="Catalogued weapons and tools recovered from the suspect"
          visible={visible}
        />

        <div className="mt-14 space-y-4">
          {skills.map((cat, catIdx) => (
            <div
              key={cat.category}
              className={`transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${catIdx * 150}ms` }}
            >
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-sm overflow-hidden hover:border-red-900/15 transition-all duration-300">
                {/* Header */}
                <button
                  onClick={() => setOpenBag(openBag === catIdx ? -1 : catIdx)}
                  className="hoverable w-full flex items-center justify-between p-5 sm:p-6 text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-2xl sm:text-3xl">{cat.icon}</span>
                    <div>
                      <div className="font-mono text-[9px] text-gray-600 tracking-[0.3em]">
                        EVIDENCE BAG #{String(catIdx + 1).padStart(3, '0')}
                      </div>
                      <h3 className="font-typewriter text-base sm:text-lg text-[#f4e4c1]">
                        {cat.category}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="font-mono text-[10px] text-gray-600 hidden sm:inline">
                      {cat.items.length} ITEMS
                    </span>
                    <span className={`text-gray-500 transition-transform duration-300 text-sm ${
                      openBag === catIdx ? 'rotate-180' : ''
                    }`}>
                      ▼
                    </span>
                  </div>
                </button>

                {/* Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openBag === catIdx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-4 sm:p-6 pt-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {cat.items.map((skill, si) => (
                      <div
                        key={skill.name}
                        className="hoverable bg-white/[0.04] border border-white/[0.04] rounded-sm p-3 sm:p-4 text-center hover:bg-white/[0.08] hover:border-red-900/15 transition-all duration-300 group"
                      >
                        <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </div>
                        <div className="font-mono text-[11px] text-[#f4e4c1] mb-2">
                          {skill.name}
                        </div>
                        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#8b0000] to-red-500 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: openBag === catIdx ? `${skill.level}%` : '0%',
                              transitionDelay: `${si * 80}ms`,
                            }}
                          />
                        </div>
                        <div className="font-mono text-[9px] text-gray-600 mt-1">
                          {skill.level}% ANALYZED
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}