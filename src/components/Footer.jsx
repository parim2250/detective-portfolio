export default function Footer() {
    return (
        <footer style={{ background: '#0a0a0a', padding: '3rem 0', position: 'relative' }}>
            <div style={{ width: '60px', height: '2px', background: '#c8a44d', margin: '0 auto 2rem', opacity: 0.3 }} />
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
                <p style={{ fontFamily: "var(--font-heading, 'Playfair Display', serif)", color: 'rgba(232,224,208,0.35)', fontSize: '1rem', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                    "Every case has a solution. Every mystery has an answer."
                </p>
                <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(232,224,208,0.2)', marginBottom: '1.5rem' }}>
                    📍 Headquarters — Bureau of Digital Forensics
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                    {[
                        { href: 'https://github.com/parim2250', icon: 'fa-brands fa-github' },
                        { href: 'https://www.linkedin.com/in/pari-mittal-b56895318', icon: 'fa-brands fa-linkedin' },
                        { href: 'https://www.threads.net/@parimittal504', icon: 'fa-solid fa-at' },
                        { href: 'https://www.instagram.com/parimittal504/', icon: 'fa-brands fa-instagram' },
                        { href: 'mailto:parim2250@gmail.com', icon: 'fa-solid fa-envelope' },
                    ].map(s => (
                        <a 
                            key={s.icon} 
                            href={s.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                                width: '36px', 
                                height: '36px', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                borderRadius: '50%', 
                                border: '1px solid rgba(200,164,77,0.2)', 
                                color: 'rgba(232,224,208,0.5)', 
                                textDecoration: 'none', 
                                transition: 'all 0.2s' 
                            }}
                            onMouseEnter={e => { e.currentTarget.style.color = '#c8a44d'; e.currentTarget.style.borderColor = '#c8a44d' }}
                            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(232,224,208,0.5)'; e.currentTarget.style.borderColor = 'rgba(200,164,77,0.2)' }}
                        >
                            <i className={s.icon} />
                        </a>
                    ))}
                </div>
                <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(232,224,208,0.2)' }}>
                    © {new Date().getFullYear()} Pari Mittal — All investigations reserved
                </p>
            </div>
        </footer>
    );
}