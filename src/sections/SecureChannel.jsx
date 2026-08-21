import { useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeader from '../components/SectionHeader'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowRight } from 'react-icons/fi'

export default function SecureChannel() {
  const ref = useRef(null)
  const visible = useScrollReveal(ref, 0.15)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    // ✏️ CONNECT YOUR EMAIL SERVICE HERE LATER
    await new Promise(r => setTimeout(r, 2000))
    setSending(false)
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  const links = [
    { icon: FiGithub, label: 'Evidence Archive', sub: 'GitHub', url: '#' },
    { icon: FiLinkedin, label: 'Agent Network', sub: 'LinkedIn', url: '#' },
    { icon: FiTwitter, label: 'Public Broadcast', sub: 'Twitter / X', url: '#' },
    { icon: FiMail, label: 'Direct Line', sub: 'Email', url: '#' },
  ]

  return (
    <section id="contact" ref={ref} className="relative py-28 sm:py-36 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="SECTION 06"
          title="SECURE CHANNEL"
          subtitle="Establish encrypted communication with the subject"
          visible={visible}
        />

        <div className={`mt-14 grid lg:grid-cols-[1fr_320px] gap-8 lg:gap-12 transition-all duration-1000 delay-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-sm p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-900/20" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-900/20" />

            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-[10px] text-gray-500 tracking-[0.2em]">
                ENCRYPTED CHANNEL — ACTIVE
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-mono text-[9px] text-gray-500 tracking-[0.3em] block mb-2">AGENT NAME *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your codename..."
                  className="w-full bg-black/30 border border-white/[0.08] rounded-sm px-4 py-3 font-mono text-sm text-[#f4e4c1] focus:border-red-900/40 focus:outline-none focus:shadow-[0_0_15px_rgba(139,0,0,0.08)] transition-all"
                />
              </div>
              <div>
                <label className="font-mono text-[9px] text-gray-500 tracking-[0.3em] block mb-2">SECURE EMAIL *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="agent@classified.com"
                  className="w-full bg-black/30 border border-white/[0.08] rounded-sm px-4 py-3 font-mono text-sm text-[#f4e4c1] focus:border-red-900/40 focus:outline-none focus:shadow-[0_0_15px_rgba(139,0,0,0.08)] transition-all"
                />
              </div>
              <div>
                <label className="font-mono text-[9px] text-gray-500 tracking-[0.3em] block mb-2">ENCRYPTED MESSAGE *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Message..."
                  className="w-full bg-black/30 border border-white/[0.08] rounded-sm px-4 py-3 font-mono text-sm text-[#f4e4c1] focus:border-red-900/40 focus:outline-none focus:shadow-[0_0_15px_rgba(139,0,0,0.08)] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="hoverable w-full py-3.5 bg-[#8b0000] text-[#f4e4c1] font-typewriter tracking-[0.15em] rounded-sm hover:bg-[#6b0000] transition-all duration-300 relative overflow-hidden group"
              >
                {sending ? 'TRANSMITTING...' : sent ? '✅ TRANSMITTED' : '📨 TRANSMIT MESSAGE'}
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-sm p-5">
              <h3 className="font-typewriter text-sm text-[#f4e4c1] mb-4 tracking-wider">OTHER CHANNELS</h3>
              <div className="space-y-2.5">
                {links.map(link => (
                  <a key={link.label} href={link.url} className="hoverable flex items-center gap-3 p-3 bg-white/[0.02] border border-white/[0.04] rounded-sm hover:border-red-900/15 transition-all group">
                    <link.icon className="text-gray-500 group-hover:text-red-400 transition-colors" size={18} />
                    <div className="font-mono text-[11px] text-[#f4e4c1]">{link.label}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}