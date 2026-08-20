import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeader from '../components/SectionHeader'

export default function SuspectProfile() {
  const ref = useRef(null)
  const visible = useScrollReveal(ref, 0.15)

  return (
    <section id="suspect" ref={ref} className="relative py-28 sm:py-36 px-4 sm:px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader label="SECTION 01" title="SUSPECT PROFILE" visible={visible} />

        <div className={`mt-14 grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-14 transition-all duration-1000 delay-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>

          {/* Left - Polaroid */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="relative group">
              {/* Push pin */}
              <div className="push-pin bg-red-500" />

              {/* Polaroid */}
              <div className="bg-white p-3 pb-14 shadow-xl rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500 relative">
                {/* ✏️ REPLACE THIS WITH YOUR PHOTO */}
                <div className="w-[250px] sm:w-[270px] h-[300px] bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 relative overflow-hidden flex items-center justify-center">
                  <span className="text-7xl opacity-50">🕵️</span>
                  <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />
                </div>

                {/* Label */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="font-handwritten text-gray-600 text-lg">
                    {/* ✏️ WRITE YOUR NAME HERE */}
                    Subject: YOUR NAME
                  </span>
                </div>

                {/* Tape */}
                <div className="tape-strip -top-2 -right-2 rotate-[30deg]" />
              </div>

              {/* Shadow papers */}
              <div className="absolute -bottom-2 -right-2 w-full h-full bg-gray-200 rotate-[3deg] -z-10 shadow" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-300 rotate-[5deg] -z-20 shadow" />
            </div>

            {/* Sticky note */}
            <div className="bg-yellow-200/90 p-4 shadow-md rotate-[1deg] max-w-[220px] relative self-center lg:self-start">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-yellow-300/50" />
              <p className="font-handwritten text-gray-700 text-base leading-snug">
                {/* ✏️ WRITE A FUN NOTE HERE */}
                Don't underestimate this one. Check the case board! 👆
              </p>
            </div>
          </div>

          {/* Right - Details */}
          <div className="space-y-6">
            {/* Main report card */}
            <div className="paper-bg text-[#2c2c2c] rounded-sm p-6 sm:p-8 relative shadow-lg overflow-hidden">
              {/* Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-stamp text-7xl text-[#2c2c2c]/[0.03] rotate-[-25deg] select-none pointer-events-none whitespace-nowrap">
                CONFIDENTIAL
              </div>

              <h3 className="font-typewriter text-lg mb-5 border-b border-[#2c2c2c]/15 pb-2 relative z-10">
                BACKGROUND REPORT
              </h3>

              <div className="space-y-3.5 font-mono text-sm relative z-10">
                <div className="grid grid-cols-[130px_1fr] gap-2">
                  <span className="text-[#2c2c2c]/40">FULL NAME:</span>
                  {/* ✏️ WRITE YOUR FULL NAME */}
                  <span className="font-bold">Your Full Name</span>
                </div>
                <div className="grid grid-cols-[130px_1fr] gap-2">
                  <span className="text-[#2c2c2c]/40">ALIAS:</span>
                  {/* ✏️ WRITE YOUR ROLE / TITLE */}
                  <span className="font-handwritten text-[#1a3a5c] text-lg">"Full Stack Developer"</span>
                </div>
                <div className="grid grid-cols-[130px_1fr] gap-2">
                  <span className="text-[#2c2c2c]/40">LAST SEEN:</span>
                  {/* ✏️ WRITE WHAT YOU'RE DOING */}
                  <span>Building web applications</span>
                </div>
                <div className="grid grid-cols-[130px_1fr] gap-2">
                  <span className="text-[#2c2c2c]/40">KNOWN FOR:</span>
                  {/* ✏️ WRITE YOUR KEY SKILLS */}
                  <span>React, Node.js, Python, Clean Code</span>
                </div>
                <div className="grid grid-cols-[130px_1fr] gap-2">
                  <span className="text-[#2c2c2c]/40">LOCATION:</span>
                  {/* ✏️ WRITE YOUR LOCATION */}
                  <span>Your City, Country</span>
                </div>

                {/* Threat level bar */}
                <div className="grid grid-cols-[130px_1fr] gap-2 items-center">
                  <span className="text-[#2c2c2c]/40">THREAT LEVEL:</span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-[2px]">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3.5 rounded-[2px] ${
                            /* ✏️ CHANGE THE 8 TO YOUR LEVEL (out of 10) */
                            i < 8
                              ? 'bg-red-600 shadow-[0_0_3px_rgba(204,0,0,0.4)]'
                              : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[#8b0000] font-bold text-[10px] tracking-wider">
                      EXTREMELY TALENTED
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio paragraph */}
              <div className="mt-6 pt-4 border-t border-[#2c2c2c]/10 relative z-10">
                <p className="text-[#2c2c2c]/60 text-sm leading-relaxed">
                  {/* ✏️ WRITE YOUR BIO / ABOUT PARAGRAPH */}
                  Subject has been spotted building applications since [YEAR].
                  Known to mass-produce clean code and pixel-perfect interfaces.
                  Demonstrates exceptional ability in both frontend and backend
                  development. Has been linked to multiple successful projects.
                </p>
                <p className="mt-3 font-bold text-[#2c2c2c] text-sm">
                  ⚠️ Approach with a job offer.
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                /* ✏️ CHANGE THESE VALUES */
                { label: 'CASES SOLVED', value: '15+', icon: '📁' },
                { label: 'YEARS ACTIVE', value: '4+', icon: '📅' },
                { label: 'WEAPONS KNOWN', value: '20+', icon: '🔧' },
              ].map((stat) => (
                <div key={stat.label} className="hoverable bg-white/[0.04] border border-white/[0.06] rounded-sm p-4 text-center hover:border-red-900/20 hover:bg-white/[0.06] transition-all duration-300 group">
                  <div className="text-2xl mb-1.5 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl font-stamp text-red-400">{stat.value}</div>
                  <div className="text-[9px] text-gray-500 tracking-[0.15em] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}