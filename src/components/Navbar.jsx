import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mapped to YOUR sections:
// Landing.jsx            → #home
// SuspectProfile.jsx     → #about
// InvestigationBoard.jsx → #projects
// EvidenceLocker.jsx     → #skills
// InvestigationLog.jsx   → #experience
// InformantReports.jsx   → #missions
// SecureChannel.jsx      → #contact
const links = [
    { href: '#about',      label: 'Dossier' },
    { href: '#projects',   label: 'Case Files' },
    { href: '#skills',     label: 'Toolkit' },
    { href: '#experience', label: 'Training' },
    { href: '#missions',   label: 'Missions' },
    { href: '#contact',    label: 'Dispatch' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', h);
        return () => window.removeEventListener('scroll', h);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: 'fixed',
                top: '20px',
                left: 0,
                right: 0,
                zIndex: 100,
                display: 'flex',
                justifyContent: 'center',
                pointerEvents: 'none',
            }}
        >
            {/* Ambient glow */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '100px',
                    background:
                        'radial-gradient(ellipse at center, rgba(200,164,77,0.1) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                    zIndex: -1,
                    opacity: scrolled ? 1 : 0.6,
                    transition: 'opacity 0.5s',
                }}
            />

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    pointerEvents: 'auto',
                    background: 'rgba(10,12,16,0.85)',
                    backdropFilter: 'blur(16px)',
                    padding: '4px 8px',
                    borderRadius: '100px',
                    border: '1px solid rgba(200,164,77,0.35)',
                    boxShadow: scrolled
                        ? '0 0 24px rgba(200,164,77,0.15)'
                        : 'none',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
            >
                {/* Logo / Home */}
                <a
                    href="#home"
                    style={{
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 12px 0 6px',
                        borderRight: '1px solid rgba(200,164,77,0.2)',
                    }}
                >
                    <div
                        style={{
                            width: '30px',
                            height: '30px',
                            background: 'rgba(200,164,77,0.12)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(200,164,77,0.35)',
                            overflow: 'hidden',
                            color: '#c8a44d',
                            fontFamily: 'var(--font-mono, monospace)',
                            fontSize: '0.65rem',
                            fontWeight: 700,
                        }}
                    >
                        {/* Swap for <img src="/logo-main.png" ... /> when you add a logo */}
                        PM
                    </div>
                </a>

                {/* Desktop links */}
                <div
                    className="hidden-mobile"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '0 12px',
                        position: 'relative',
                    }}
                >
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="navbar-link"
                            style={{
                                fontFamily: 'var(--font-heading, serif)',
                                fontSize: '0.85rem',
                                letterSpacing: '0.05em',
                                color: 'rgba(232,224,208,0.7)',
                                padding: '10px 14px',
                                borderRadius: '20px',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'all 0.3s',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#e8dcc4';
                                e.currentTarget.style.background =
                                    'rgba(255,255,255,0.04)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color =
                                    'rgba(232,224,208,0.7)';
                                e.currentTarget.style.background = 'transparent';
                            }}
                        >
                            {l.label}
                            <span
                                style={{
                                    border: '1px solid rgba(200,164,77,0.35)',
                                    marginLeft: '8px',
                                    padding: '1px 5px',
                                    fontSize: '0.55rem',
                                    borderRadius: '3px',
                                    opacity: 0.5,
                                    fontFamily: 'var(--font-mono, monospace)',
                                }}
                            >
                                {l.label.charAt(0)}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Mobile Dispatch shortcut */}
                <a
                    href="#contact"
                    className="show-mobile"
                    style={{ textDecoration: 'none' }}
                >
                    <button
                        style={{
                            background: '#c8a44d',
                            color: '#100c0a',
                            border: 'none',
                            padding: '8px 16px',
                            borderRadius: '100px',
                            fontFamily: 'var(--font-mono, monospace)',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                        }}
                    >
                        DISPATCH
                    </button>
                </a>

                {/* Mobile menu toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="show-mobile"
                    aria-label="Menu"
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#c8a44d',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        padding: '0 12px',
                    }}
                >
                    <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`} />
                </button>
            </div>

            {/* Mobile dropdown */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '90vw',
                            maxWidth: '300px',
                            background: '#100c0a',
                            border: '1px solid rgba(200,164,77,0.35)',
                            borderRadius: '12px',
                            marginTop: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                            zIndex: 101,
                            pointerEvents: 'auto',
                        }}
                    >
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '14px 1.5rem',
                                    fontFamily: 'var(--font-heading, serif)',
                                    fontSize: '0.9rem',
                                    color: 'rgba(232,224,208,0.75)',
                                    textDecoration: 'none',
                                    borderBottom:
                                        '1px solid rgba(200,164,77,0.12)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#c8a44d';
                                    e.currentTarget.style.background =
                                        'rgba(200,164,77,0.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color =
                                        'rgba(232,224,208,0.75)';
                                    e.currentTarget.style.background =
                                        'transparent';
                                }}
                            >
                                {l.label}
                                <span
                                    style={{
                                        fontFamily: 'var(--font-mono, monospace)',
                                        fontSize: '0.6rem',
                                        opacity: 0.4,
                                    }}
                                >
                                    [{l.label.charAt(0)}]
                                </span>
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (min-width: 768px) {
                    .show-mobile { display: none !important; }
                }
                @media (max-width: 767px) {
                    .hidden-mobile { display: none !important; }
                    .show-mobile { display: block !important; }
                }
            `}</style>
        </motion.nav>
    );
}