import { useRef, useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeader from '../components/SectionHeader'
import { testimonials } from '../data/testimonials'

export default function InformantReports() {
  const ref = useRef(null)
  const visible = useScrollReveal(ref, 0.2)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const t = testimonials[active]

  return (
    <section id="intel" ref={ref} className="relative py-28 sm:py-36 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="SECTION 05"
          title="INFORMANT REPORTS"
          subtitle="Classified testimonies from known associates"
          visible={visible}
        />

        <div className={`mt-14 transition-all duration-1000 delay-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Main testimonial card */}
          <div className="paper-bg text-[#2c2c2c] rounded-sm p-7 sm:p-10 shadow-xl relative overflow-hidden min-h-[280px]">
            {/* Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-stamp text-6xl sm:text-8xl text-[#2c2c2c]/[0.025] rotate-[-25deg] select-none pointer-events-none whitespace-nowrap">
              CLASSIFIED INTEL
            </div>

            <div className="relative z-10">
              {/* Verified badge */}
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                <span className="font-mono text-[10px] text-[#2c2c2c]/30 tracking-[0.3em]">
                  VERIFIED INFORMANT — REPORT #{String(active + 1).padStart(3, '0')}
                </span>
              </div>

              {/* Quote */}
              <blockquote
                key={active}
                className="font-mono text-[#2c2c2c]/65 text-sm sm:text-base leading-relaxed italic mb-8"
                style={{ animation: 'revealUp 0.6s ease forwards' }}
              >
                "{t.text}"
              </blockquote>

              {/* Bottom info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#2c2c2c]/10 pt-5">
                <div>
                  <div className="font-typewriter text-sm text-[#2c2c2c]">
                    INFORMANT:{' '}
                    {/* Names are redacted - hover to reveal */}
                    <span className="redacted">{t.name}</span>
                  </div>
                  <div className="font-mono text-[11px] text-[#2c2c2c]/40 mt-1">
                    {t.role}
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="font-mono text-[9px] text-[#2c2c2c]/30 mb-1 tracking-wider">
                    RELIABILITY
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-base ${
                        i < t.reliability ? 'text-yellow-600' : 'text-gray-300'
                      }`}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`hoverable w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  active === i
                    ? 'bg-red-600 shadow-[0_0_8px_rgba(204,0,0,0.4)] scale-125'
                    : 'bg-gray-700 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}