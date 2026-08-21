import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const quotes = [
  "Deduce precisely.",
  "Code flawlessly.",
  "Deploy intelligently.",
]

export default function Hero() {
  const [qi, setQi] = useState(0)
  const [text, setText] = useState('')

  useEffect(() => {
    const q = quotes[qi]
    let i = 0
    setText('')
    const iv = setInterval(() => {
      setText(q.slice(0, i + 1))
      i++
      if (i >= q.length) {
        clearInterval(iv)
        setTimeout(() => setQi((qi + 1) % quotes.length), 2200)
      }
    }, 55)
    return () => clearInterval(iv)
  }, [qi])

  const scrollDown = () => {
    document.getElementById('suspect')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 1.5rem',
        background: '#0c0a09',
      }}
    >
      {/* Subtle vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Detective Identity Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '640px',
          width: '100%',
        }}
      >
        {/* Radar scanner behind the text */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
            pointerEvents: 'none',
            width: 'clamp(300px, 60vw, 600px)',
            aspectRatio: '1/1',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '1px solid rgba(200, 164, 77, 0.15)',
              position: 'relative',
              boxShadow: '0 0 40px rgba(200, 164, 77, 0.05) inset',
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '50%',
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent, rgba(200, 164, 77, 0.4))',
                transformOrigin: 'left center',
              }}
            />
          </div>
        </div>

        {/* Classification */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <span
            style={{
              display: 'inline-block',
              fontFamily: '"Special Elite", monospace',
              fontSize: '0.7rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#cca153',
              border: '1px solid rgba(204,161,83,0.3)',
              borderRadius: '9999px',
              padding: '0.4rem 1.1rem',
              background: 'rgba(0,0,0,0.25)',
              backdropFilter: 'blur(4px)',
            }}
          >
            Classification: Level 5 — Active
          </span>
        </motion.div>

        {/* Name — Pari Mittal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            lineHeight: 0.95,
            marginBottom: '2.5rem',
          }}
        >
          <span
            style={{
              fontSize: 'clamp(3.2rem, 8.5vw, 6rem)',
              color: '#f2ebdf',
              display: 'block',
              marginBottom: '1.25rem',
            }}
          >
            Pari
          </span>
          <span
            style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
              color: '#cca153',
              display: 'block',
            }}
          >
            Mittal
          </span>
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          style={{
            width: '48px',
            height: '1px',
            background: '#cca153',
            margin: '0 auto 2rem',
            opacity: 0.8,
          }}
        />

        {/* Title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            fontFamily: '"Special Elite", monospace',
            fontSize: '0.75rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(204,161,83,0.7)',
            marginBottom: '1.75rem',
          }}
        >
          Full Stack Developer — AI/ML Engineer
        </motion.p>

        {/* Typewriter quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '1.1rem',
            color: 'rgba(232,224,208,0.75)',
            fontStyle: 'italic',
            height: '28px',
            marginBottom: '2.5rem',
          }}
        >
          "{text}
          <span
            style={{
              display: 'inline-block',
              width: '2px',
              height: '16px',
              background: '#cca153',
              marginLeft: '2px',
              verticalAlign: 'text-bottom',
              animation: 'pulse 1s infinite',
            }}
          />
          "
        </motion.p>

        {/* 3 Investigation buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '2.5rem',
          }}
        >
          <motion.a
            href="#suspect"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            style={btnGoldStyle}
          >
            <i className="fas fa-folder-open" style={{ marginRight: 8 }} />
            Case Files
          </motion.a>
          <motion.a
            href="#toolkit"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            style={btnOutlineStyle}
          >
            <i className="fas fa-toolbox" style={{ marginRight: 8 }} />
            Evidence Toolkit
          </motion.a>
          <motion.a
            href="#missions"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            style={btnOutlineStyle}
          >
            <i className="fas fa-clock-rotate-left" style={{ marginRight: 8 }} />
            Investigation Log
          </motion.a>
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            fontFamily: '"Special Elite", monospace',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(232,224,208,0.3)',
            marginTop: '2.5rem',
          }}
        >
          📍 Noida, Uttar Pradesh — Check the logs.
        </motion.p>

        {/* Curiosity Hook Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '0.9rem',
            color: 'rgba(232,224,208,0.5)',
            fontStyle: 'italic',
            marginTop: '2.5rem',
            marginBottom: '1.5rem',
          }}
        >
          "Every bug is a mystery. Every interface is a puzzle."
        </motion.p>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
        }}
        onClick={scrollDown}
      >
        <motion.p
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{
            fontFamily: '"Special Elite", monospace',
            fontSize: '0.65rem',
            color: 'rgba(232,224,208,0.45)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          ▼ Begin Investigation
        </motion.p>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1 }
          50% { opacity: 0 }
        }
      `}</style>
    </section>
  )
}

/* ===== Button styles ===== */
const btnBase = {
  display: 'inline-flex',
  alignItems: 'center',
  fontFamily: '"Special Elite", monospace',
  fontSize: '0.7rem',
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  padding: '0.7rem 1.2rem',
  borderRadius: '6px',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
}

const btnGoldStyle = {
  ...btnBase,
  background: '#cca153',
  color: '#1a140c',
  border: '1px solid #cca153',
}

const btnOutlineStyle = {
  ...btnBase,
  background: 'rgba(0,0,0,0.25)',
  color: '#e6d5aa',
  border: '1px solid rgba(204,161,83,0.35)',
}