import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

// Must match the ids used in App.jsx
const SECTIONS = [
    'home',
    'about',
    'projects',
    'skills',
    'experience',
    'education',
    'missions',
    'contact',
];

const TOTAL_FILES = SECTIONS.length;

export default function InvestigationStatus() {
    const { scrollYProgress } = useScroll();
    const [percent, setPercent] = useState(0);
    const [activeFile, setActiveFile] = useState(1);

    // Overall scroll %
    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (v) => {
            const p = Math.min(100, Math.max(0, Math.round(v * 100)));
            setPercent(p);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    // Active section detector
    useEffect(() => {
        const checkActiveSection = () => {
            const triggerPoint = window.scrollY + window.innerHeight / 3;
            let current = 0;

            SECTIONS.forEach((id, index) => {
                const el = document.getElementById(id);
                if (el && triggerPoint >= el.offsetTop) {
                    current = index;
                }
            });

            setActiveFile(current + 1);
        };

        window.addEventListener('scroll', checkActiveSection, { passive: true });
        checkActiveSection();

        return () => window.removeEventListener('scroll', checkActiveSection);
    }, []);

    // ASCII bar [ ████░░░░░░ ]
    const filledBlocks = Math.floor(percent / 10);
    const emptyBlocks = 10 - filledBlocks;
    const asciiBar = '█'.repeat(filledBlocks) + '░'.repeat(emptyBlocks);

    return (
        <div
            className="hud-status-wrapper"
            style={{
                position: 'fixed',
                bottom: '24px',
                left: '24px',
                zIndex: 90,
                pointerEvents: 'none',
                userSelect: 'none',
            }}
        >
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                style={{
                    background: 'rgba(10, 12, 16, 0.92)',
                    backdropFilter: 'blur(12px)',
                    padding: '12px 18px',
                    borderRadius: '6px',
                    border: '1px solid rgba(200, 170, 100, 0.3)',
                    boxShadow:
                        '0 10px 30px rgba(0, 0, 0, 0.7), inset 0 0 10px rgba(200, 170, 100, 0.05)',
                    minWidth: '220px',
                }}
            >
                {/* Header */}
                <div
                    style={{
                        fontFamily: 'var(--font-mono, monospace)',
                        fontSize: '0.62rem',
                        color: '#c8a44d',
                        marginBottom: '8px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        letterSpacing: '0.12em',
                        fontWeight: 'bold',
                    }}
                >
                    <span>INVESTIGATION STATUS</span>
                    <span>{percent}%</span>
                </div>

                {/* Progress fill */}
                <div
                    style={{
                        height: '5px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        borderRadius: '3px',
                        overflow: 'hidden',
                        marginBottom: '10px',
                    }}
                >
                    <div
                        style={{
                            height: '100%',
                            background: '#c8a44d',
                            width: `${percent}%`,
                            boxShadow: '0 0 10px rgba(200, 164, 77, 0.6)',
                            transition: 'width 0.1s linear',
                        }}
                    />
                </div>

                {/* File count + ASCII */}
                <div
                    style={{
                        fontFamily: 'var(--font-mono, monospace)',
                        fontSize: '0.6rem',
                        color: 'rgba(232, 224, 208, 0.6)',
                        letterSpacing: '0.1em',
                    }}
                >
                    FILES REVIEWED:{' '}
                    <span style={{ color: '#e8dcc4', fontWeight: 'bold' }}>
                        {activeFile} / {TOTAL_FILES}
                    </span>

                    <div
                        style={{
                            marginTop: '4px',
                            color: '#c8a44d',
                            opacity: 0.75,
                            fontSize: '0.55rem',
                            letterSpacing: '0.15em',
                        }}
                    >
                        [ {asciiBar} ]
                    </div>
                </div>
            </motion.div>

            <style>{`
                @media (max-width: 768px) {
                    .hud-status-wrapper { display: none !important; }
                }
            `}</style>
        </div>
    );
}