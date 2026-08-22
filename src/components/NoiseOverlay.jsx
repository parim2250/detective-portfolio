import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Clue board pieces (positions are % so they stay responsive)
const clues = [
    { id: 1, type: 'photo',    x: 15, y: 20, rotation: -5,  content: null, width: 120, height: 140 },
    { id: 2, type: 'note',     x: 25, y: 60, rotation: 8,   content: 'Who is the inside man?', width: 150, height: 100 },
    { id: 3, type: 'clipping', x: 75, y: 15, rotation: 3,   content: 'THE DAILY REPORT\nA breakthrough in the case...', width: 180, height: 160 },
    { id: 4, type: 'map',      x: 80, y: 70, rotation: -12, content: null, width: 200, height: 180 },
    { id: 5, type: 'photo',    x: 30, y: 80, rotation: 15,  content: null, width: 100, height: 120 },
    { id: 6, type: 'note',     x: 50, y: 75, rotation: -6,  content: 'Check the evidence locker.\nCross-reference the logs.', width: 140, height: 120 },
];

const connections = [
    { from: 1, to: 2, delay: 1 },
    { from: 2, to: 6, delay: 3 },
    { from: 6, to: 3, delay: 5 },
    { from: 3, to: 4, delay: 7 },
    { from: 6, to: 5, delay: 9 },
    { from: 1, to: 6, delay: 12 },
];

export default function NoiseOverlay() {
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' && window.innerWidth < 768
    );
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 30;
        setParticles(
            Array.from({ length: count }).map((_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3 + 1,
                duration: Math.random() * 20 + 20,
                delay: Math.random() * 5,
            }))
        );
    }, []);

    return (
        <div
            style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                backgroundColor: '#1a1412',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        >
            {/* Ambient cork / wood wash */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(circle at 50% 50%, rgba(138, 90, 68, 0.15) 0%, rgba(20, 15, 12, 0.95) 80%)',
                    mixBlendMode: 'multiply',
                }}
            />

            {/* Slow cinematic drift */}
            <motion.div
                initial={{ scale: 1.1, x: '-2%', y: '-2%' }}
                animate={{
                    scale: [1.1, 1.05, 1.1],
                    x: ['-2%', '0%', '-2%'],
                    y: ['-2%', '1%', '-2%'],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute',
                    inset: -50,
                    width: 'calc(100% + 100px)',
                    height: 'calc(100% + 100px)',
                }}
            >
                {/* Skip heavy board pieces on mobile for performance */}
                {!isMobile && (
                    <>
                        {/* Red string connections */}
                        <svg
                            style={{
                                position: 'absolute',
                                inset: 0,
                                width: '100%',
                                height: '100%',
                                overflow: 'visible',
                            }}
                        >
                            {connections.map((conn, idx) => {
                                const fromClue = clues.find((c) => c.id === conn.from);
                                const toClue = clues.find((c) => c.id === conn.to);
                                if (!fromClue || !toClue) return null;

                                return (
                                    <motion.line
                                        key={idx}
                                        x1={`${fromClue.x}%`}
                                        y1={`${fromClue.y}%`}
                                        x2={`${toClue.x}%`}
                                        y2={`${toClue.y}%`}
                                        stroke="rgba(180, 40, 40, 0.8)"
                                        strokeWidth="2"
                                        strokeDasharray="5,5"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 0.6 }}
                                        transition={{
                                            delay: conn.delay,
                                            duration: 3,
                                            ease: 'easeInOut',
                                            opacity: { duration: 1, delay: conn.delay },
                                        }}
                                    />
                                );
                            })}
                        </svg>

                        {/* Evidence cards / notes / photos */}
                        {clues.map((clue, index) => (
                            <motion.div
                                key={clue.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: (index % 3) * 0.5, duration: 2 }}
                                style={{
                                    position: 'absolute',
                                    left: `${clue.x}%`,
                                    top: `${clue.y}%`,
                                    transform: `translate(-50%, -50%) rotate(${clue.rotation}deg)`,
                                    width: clue.width,
                                    height: clue.height,
                                    backgroundColor:
                                        clue.type === 'photo' ? '#222' : '#e8dcc4',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                                    padding:
                                        clue.type === 'photo'
                                            ? '8px 8px 30px 8px'
                                            : '15px',
                                    border:
                                        clue.type === 'photo' ? '1px solid #333' : 'none',
                                    borderRadius: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    fontFamily:
                                        clue.type === 'note'
                                            ? 'var(--font-mono, monospace)'
                                            : 'var(--font-heading, serif)',
                                    fontSize: clue.type === 'note' ? '0.7rem' : '0.6rem',
                                    color: '#3a2a22',
                                    filter: 'sepia(0.6) brightness(0.7) contrast(1.2)',
                                }}
                            >
                                {clue.type === 'photo' && (
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: '#111',
                                            backgroundImage:
                                                'radial-gradient(circle, #333 1px, transparent 1px)',
                                            backgroundSize: '4px 4px',
                                        }}
                                    />
                                )}
                                {clue.type === 'map' && (
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: '#d4c5ab',
                                            backgroundImage:
                                                'radial-gradient(circle, #a89476 1px, transparent 1px)',
                                            backgroundSize: '10px 10px',
                                            opacity: 0.8,
                                        }}
                                    />
                                )}
                                {(clue.type === 'note' || clue.type === 'clipping') && (
                                    <div
                                        style={{
                                            whiteSpace: 'pre-wrap',
                                            width: '100%',
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {clue.content}
                                    </div>
                                )}

                                {/* Red pin */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '8px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '8px',
                                        height: '8px',
                                        backgroundColor: '#900',
                                        borderRadius: '50%',
                                        boxShadow:
                                            '0 2px 4px rgba(0,0,0,0.4), inset 0 2px 2px rgba(255,100,100,0.5)',
                                    }}
                                />
                            </motion.div>
                        ))}
                    </>
                )}
            </motion.div>

            {/* Floating dust */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 0, x: `${p.x}vw`, y: `${p.y}vh` }}
                        animate={{
                            opacity: [0, 0.5, 0],
                            y: [`${p.y}vh`, `${p.y - 15}vh`],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                            ease: 'linear',
                        }}
                        style={{
                            position: 'absolute',
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            backgroundColor: 'rgba(232, 224, 208, 0.4)',
                            borderRadius: '50%',
                            filter: 'blur(2px)',
                        }}
                    />
                ))}
            </div>

            {/* Edge vignette */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.85) 100%)',
                    pointerEvents: 'none',
                }}
            />
        </div>
    );
}