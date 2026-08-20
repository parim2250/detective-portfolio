import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeader from '../components/SectionHeader'
import { timeline } from '../data/timeline'

export default function InvestigationLog() {
  const ref = useRef(null)
  const visible = useScrollReveal(ref, 0.1)

  return (
    <section id="log" ref={ref} className="relative py-28 sm:py-36 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="SECTION 04"
          title="INVESTIGATION LOG"
          subtitle="Chronological record of subject's known activities"
          visible={visible}
        />

        <div className="mt-14 relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-900/40 via-red-900/20 to-transparent" />

          {timeline.map((entry, i) => {
            const isLeft = i % 2 === 0

            return (
              <div
                key={i}
                className={`relative mb-10 sm:mb-14 transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-800 border-2 border-red-600 z-10"
                  style={{
                    boxShadow: '0 0 10px rgba(204,0,0,0.3)',
                    top: '1.5rem',
                  }}
                />

                {/* Card */}
                <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                  isLeft ? 'sm:mr-auto sm:pr-0 sm:text-right' : 'sm:ml-auto sm:pl-0'
                } ${isLeft ? 'sm:pr-8' : 'sm:pl-8'}`}>
                  <div className="hoverable bg-white/[0.03] border border-white/[0.06] rounded-sm p-5 hover:border-red-900/15 transition-all duration-300 group relative">
                    {/* Red accent */}
                    <div className={`absolute top-0 ${isLeft ? 'sm:right-0' : 'left-0'} left-0 w-1 h-full bg-red-900/30 rounded-l-sm`} />

                    <div className="font-mono text-[10px] text-red-400/70 tracking-[0.2em] mb-2">
                      📅 {entry.date}
                    </div>
                    <h3 className="font-typewriter text-[#f4e4c1] text-sm mb-2">
                      {entry.title}
                    </h3>
                    <p className="font-mono text-[11px] text-gray-500 leading-relaxed">
                      {entry.description}
                    </p>
                    {entry.tag && (
                      <span className="inline-block mt-3 text-[9px] font-mono bg-red-900/15 text-red-400/70 px-2 py-0.5 rounded-sm tracking-wider">
                        {entry.tag}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}

          {/* End marker */}
          <div className="relative flex justify-center mt-6">
            <div className="bg-[#0a0a0a] px-4 py-2 relative z-10">
              <span className="font-typewriter text-xs text-gray-600 animate-pulse">
                ▼ INVESTIGATION ONGOING... ▼
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}