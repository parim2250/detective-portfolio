import { motion } from 'framer-motion';
import { useState } from 'react';

const fadeIn = (d = 0) => ({ 
    initial: { opacity: 0, y: 25 }, 
    whileInView: { opacity: 1, y: 0 }, 
    viewport: { once: true }, 
    transition: { delay: d, duration: 0.5 } 
});

const iS = { 
    width: '100%', 
    background: 'rgba(255, 255, 255, 0.04)', 
    border: '1px solid rgba(200, 170, 100, 0.25)', 
    color: '#e8dcc4', 
    fontFamily: 'var(--font-mono, monospace)', 
    fontSize: '0.875rem', 
    padding: '12px 14px', 
    borderRadius: '4px', 
    outline: 'none',
    boxSizing: 'border-box'
};

const lS = { 
    display: 'block', 
    fontFamily: 'var(--font-mono, monospace)', 
    fontSize: '0.65rem', 
    letterSpacing: '0.12em', 
    textTransform: 'uppercase', 
    color: '#c8a44d', 
    marginBottom: '6px' 
};

const contacts = [
    { icon: 'fa-solid fa-envelope', label: 'Email', value: 'parim2250@gmail.com', href: 'mailto:parim2250@gmail.com' },
    { icon: 'fa-brands fa-github', label: 'GitHub', value: 'parim2250', href: 'https://github.com/parim2250' },
    { icon: 'fa-brands fa-linkedin', label: 'LinkedIn', value: 'pari-mittal', href: 'https://www.linkedin.com/in/pari-mittal-b56895318' },
    { icon: 'fa-solid fa-at', label: 'Threads', value: '@parimittal504', href: 'https://www.threads.net/@parimittal504' },
    { icon: 'fa-brands fa-instagram', label: 'Instagram', value: '@parimittal504', href: 'https://www.instagram.com/parimittal504/' },
];

export default function SecureChannel() {
    const [done, setDone] = useState(false);

    const submit = (e) => { 
        e.preventDefault(); 
        setDone(true); 
        setTimeout(() => setDone(false), 4000); 
    };

    return (
        <section id="contact" style={{ padding: '6rem 1.5rem', backgroundColor: '#100c0a', color: '#e8dcc4' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div {...fadeIn()} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'rgba(232, 224, 208, 0.5)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                        // Confidential Dispatch
                    </span>
                    <h2 style={{ fontFamily: 'var(--font-heading, serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#e8dcc4', margin: '0 0 1rem 0' }}>
                        Submit a <span style={{ color: '#c8a44d' }}>Report</span>
                    </h2>
                    <p style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.9rem', color: 'rgba(232, 224, 208, 0.7)', maxWidth: '600px', margin: '0 auto' }}>
                        Have a project idea or technical challenge? File a confidential investigation request.
                    </p>
                </motion.div>

                <div style={{ maxWidth: '780px', margin: '0 auto' }}>
                    {/* Contacts Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', marginBottom: '2.5rem' }}>
                        {contacts.map((c, i) => (
                            <motion.a 
                                key={c.label} 
                                {...fadeIn(i * 0.08)} 
                                href={c.href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                whileHover={{ y: -4 }}
                                style={{
                                    padding: '1.25rem 0.8rem',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    background: '#181310',
                                    border: '1px solid rgba(200, 170, 100, 0.2)',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                                    transition: 'border-color 0.2s'
                                }}
                            >
                                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(200, 170, 100, 0.08)', border: '1px solid rgba(200, 170, 100, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                    <i className={c.icon} style={{ color: '#c8a44d', fontSize: '1rem' }} />
                                </div>
                                <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c8a44d', marginBottom: '4px' }}>
                                    {c.label}
                                </div>
                                <div style={{ color: '#e8dcc4', fontSize: '0.75rem', fontFamily: 'var(--font-mono, monospace)', wordBreak: 'break-all' }}>
                                    {c.value}
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Report Form */}
                    <motion.form 
                        {...fadeIn(0.15)} 
                        onSubmit={submit} 
                        style={{ 
                            background: '#181310', 
                            border: '1px solid rgba(200, 170, 100, 0.25)', 
                            padding: '2.5rem 2rem', 
                            borderRadius: '4px', 
                            position: 'relative',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.6)'
                        }}
                    >
                        <div style={{ 
                            position: 'absolute', 
                            top: '-14px', 
                            left: '50%', 
                            transform: 'translateX(-50%)',
                            background: '#100c0a',
                            border: '1px solid #c8a44d',
                            padding: '2px 14px',
                            borderRadius: '2px'
                        }}>
                            <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.65rem', color: '#c8a44d', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 'bold' }}>
                                Confidential Report
                            </span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                            <div>
                                <label style={lS}>Investigator Name</label>
                                <input type="text" required placeholder="Your name" style={iS} />
                            </div>
                            <div>
                                <label style={lS}>Comm Channel</label>
                                <input type="email" required placeholder="your@email.com" style={iS} />
                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={lS}>Case Subject</label>
                            <input type="text" required placeholder="Brief description" style={iS} />
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={lS}>Case Details</label>
                            <textarea required rows={5} placeholder="Describe the mystery..." style={{ ...iS, resize: 'vertical' }} />
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <motion.button 
                                type="submit" 
                                whileHover={{ y: -2 }} 
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    background: '#c8a44d',
                                    color: '#100c0a',
                                    fontFamily: 'var(--font-mono, monospace)',
                                    fontWeight: 'bold',
                                    fontSize: '0.85rem',
                                    letterSpacing: '0.1em',
                                    padding: '12px 28px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}
                            >
                                <i className="fa-solid fa-paper-plane" /> Submit Report
                            </motion.button>
                        </div>

                        {done && (
                            <motion.p 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                style={{ fontFamily: 'var(--font-mono, monospace)', color: '#c8a44d', fontSize: '0.85rem', marginTop: '1.5rem', textAlign: 'center' }}
                            >
                                ✓ Confidential report filed successfully.
                            </motion.p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}