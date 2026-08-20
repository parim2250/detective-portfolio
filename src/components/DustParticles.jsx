import { useMemo } from 'react'

export default function DustParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * 20,
      opacity: Math.random() * 0.25 + 0.05,
    }))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[#f4e4c1]"
          style={{
            left: `${p.left}%`,
            bottom: '-5%',
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `dustRise ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}