export default function SectionHeader({ label, title, subtitle, visible }) {
  return (
    <div className={`transition-all duration-1000 ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-[1px] bg-red-800" />
        <span className="font-mono text-[10px] text-red-400/50 tracking-[0.4em]">
          {label}
        </span>
      </div>

      <h2 className="font-typewriter text-3xl sm:text-4xl text-[#f4e4c1] tracking-wide">
        {title}
      </h2>

      {subtitle && (
        <p className="font-mono text-sm text-gray-500 mt-2 max-w-lg">
          {subtitle}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <div className="w-12 h-[2px] bg-red-800" />
        <div className="w-2 h-2 rounded-full bg-red-800" />
        <div className="flex-1 h-[1px] bg-white/5" />
      </div>
    </div>
  )
}