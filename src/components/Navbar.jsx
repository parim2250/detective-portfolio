import { useState, useEffect } from 'react'

const navItems = [
  { id: 'suspect', label: 'SUSPECT', icon: '👤' },
  { id: 'cases', label: 'CASES', icon: '📁' },
  { id: 'evidence', label: 'EVIDENCE', icon: '🔒' },
  { id: 'log', label: 'LOG', icon: '📋' },
  { id: 'intel', label: 'INTEL', icon: '🗣️' },
  { id: 'contact', label: 'COMMS', icon: '📡' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const scrollPos = window.scrollY + 250
      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActive(item.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled
        ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-red-900/10 py-2'
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="hoverable flex items-center gap-2 group"
        >
          <span className="text-xl group-hover:rotate-12 transition-transform duration-300">🔍</span>
          <span className="font-typewriter text-[#f4e4c1] text-xs tracking-[0.2em] hidden sm:block">
            CASE #2024
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`hoverable px-3 py-2 font-mono text-[11px] tracking-wider rounded transition-all duration-300 ${
                active === item.id
                  ? 'text-red-400 bg-red-900/15 border-b-2 border-red-700'
                  : 'text-gray-500 hover:text-[#f4e4c1] hover:bg-white/[0.03]'
              }`}
            >
              <span className="mr-1">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        {/* Classified badge */}
        <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono text-red-700/60 border border-red-900/20 px-3 py-1.5 rounded">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
          CLASSIFIED
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden hoverable text-[#f4e4c1] p-2"
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        mobileOpen ? 'max-h-96 border-t border-red-900/10' : 'max-h-0'
      }`}>
        <div className="bg-[#0a0a0a]/98 backdrop-blur-md px-4 py-4 space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`block w-full text-left px-4 py-3 font-mono text-xs tracking-wider rounded transition-all ${
                active === item.id
                  ? 'text-red-400 bg-red-900/15'
                  : 'text-gray-500 hover:text-[#f4e4c1] hover:bg-white/[0.03]'
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}