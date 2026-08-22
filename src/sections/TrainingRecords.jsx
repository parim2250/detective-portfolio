import { motion } from 'framer-motion';

const records = [
    {
        institution: 'Jaypee Institute of Information Technology',
        degree: 'B.Tech in Computer Science & Engineering',
        period: 'Present',
        status: 'IN PROGRESS',
        statusColor: '#b8860b',
        progress: 70,
        icon: 'fa-solid fa-microchip',
    },
    {
        institution: 'P. R. Public School',
        degree: 'Senior Secondary Education',
        period: 'Completed',
        status: 'CERTIFIED',
        statusColor: '#2b7a2b',
        progress: 100,
        icon: 'fa-solid fa-graduation-cap',
    },
    {
        institution: 'S. D. Public School, Muzaffarnagar',
        degree: 'Secondary Education',
        period: 'Completed',
        status: 'CERTIFIED',
        statusColor: '#2b7a2b',
        progress: 100,
        icon: 'fa-solid fa-school',
    },
];

const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.5 },
});

export default function TrainingRecords() {
    return (
        <section
            id="education"
            style={{
                padding: '6rem 1.5rem',
                backgroundColor: '#100c0a',
                color: '#e8dcc4',
            }}
        >
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div {...fadeIn()} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span
                        style={{
                            fontFamily: 'var(--font-mono, monospace)',
                            fontSize: '0.75rem',
                            letterSpacing: '0.2em',
                            color: 'rgba(232, 224, 208, 0.5)',
                            textTransform: 'uppercase',
                            display: 'block',
                            marginBottom: '0.5rem',
                        }}
                    >
                        // Training Division
                    </span>
                    <h2
                        style={{
                            fontFamily: 'var(--font-heading, serif)',
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            color: '#e8dcc4',
                            margin: '0 0 1rem 0',
                        }}
                    >
                        Training <span style={{ color: '#c8a44d' }}>Records</span>
                    </h2>
                    <p
                        style={{
                            fontFamily: 'var(--font-mono, monospace)',
                            fontSize: '0.9rem',
                            color: 'rgba(232, 224, 208, 0.7)',
                            maxWidth: '560px',
                            margin: '0 auto',
                        }}
                    >
                        Academic certifications and professional training progression.
                    </p>
                </motion.div>

                {/* Cards */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '24px',
                        maxWidth: '900px',
                        margin: '0 auto',
                    }}
                >
                    {records.map((r, i) => (
                        <motion.div
                            key={r.degree}
                            {...fadeIn(i * 0.12)}
                            whileHover={{ y: -4 }}
                            style={{
                                padding: '2rem 1.5rem',
                                textAlign: 'center',
                                position: 'relative',
                                background: '#181310',
                                border: '1px solid rgba(200, 170, 100, 0.25)',
                                borderRadius: '4px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.45)',
                            }}
                        >
                            {/* Icon */}
                            <div
                                style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '50%',
                                    background: 'rgba(200, 170, 100, 0.08)',
                                    border: '1px solid rgba(200, 170, 100, 0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1rem',
                                }}
                            >
                                <i
                                    className={r.icon}
                                    style={{ color: '#c8a44d', fontSize: '1.25rem' }}
                                />
                            </div>

                            <h3
                                style={{
                                    fontFamily: 'var(--font-heading, serif)',
                                    fontSize: '1.05rem',
                                    fontWeight: 700,
                                    marginBottom: '0.35rem',
                                    color: '#e8dcc4',
                                }}
                            >
                                {r.degree}
                            </h3>

                            <p
                                style={{
                                    fontSize: '0.85rem',
                                    color: 'rgba(232, 224, 208, 0.55)',
                                    marginBottom: '1rem',
                                    fontFamily: 'var(--font-mono, monospace)',
                                }}
                            >
                                {r.institution}
                            </p>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    marginBottom: '1rem',
                                    flexWrap: 'wrap',
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: 'var(--font-mono, monospace)',
                                        fontSize: '0.65rem',
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        color: 'rgba(232, 224, 208, 0.45)',
                                    }}
                                >
                                    <i
                                        className="fa-solid fa-calendar"
                                        style={{
                                            marginRight: '6px',
                                            color: '#c8a44d',
                                            opacity: 0.7,
                                        }}
                                    />
                                    {r.period}
                                </span>

                                <span
                                    style={{
                                        border: `2px solid ${r.statusColor}`,
                                        color: r.statusColor,
                                        fontFamily: 'var(--font-mono, monospace)',
                                        fontSize: '0.65rem',
                                        fontWeight: 'bold',
                                        letterSpacing: '0.12em',
                                        padding: '3px 8px',
                                        transform: 'rotate(-2deg)',
                                    }}
                                >
                                    {r.status}
                                </span>
                            </div>

                            {/* Progress bar */}
                            <div
                                style={{
                                    height: '6px',
                                    background: 'rgba(255,255,255,0.08)',
                                    borderRadius: '3px',
                                    overflow: 'hidden',
                                }}
                            >
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${r.progress}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                                    style={{
                                        height: '100%',
                                        borderRadius: '3px',
                                        background:
                                            r.progress === 100 ? '#3b82f6' : '#c8a44d',
                                        boxShadow:
                                            r.progress === 100
                                                ? '0 0 10px rgba(59,130,246,0.5)'
                                                : '0 0 10px rgba(200,164,77,0.5)',
                                    }}
                                />
                            </div>
                            <p
                                style={{
                                    fontFamily: 'var(--font-mono, monospace)',
                                    fontSize: '0.6rem',
                                    color: 'rgba(232, 224, 208, 0.35)',
                                    marginTop: '0.5rem',
                                }}
                            >
                                {r.progress}% Complete
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}