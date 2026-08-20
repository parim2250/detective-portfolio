export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔍</span>
          <span className="font-typewriter text-xs text-gray-600 tracking-wider">
            CASE #2024-PORTFOLIO
          </span>
        </div>

        <p className="font-mono text-[11px] text-gray-600 text-center">
          All evidence collected & catalogued by{' '}
          {/* ✏️ WRITE YOUR NAME HERE */}
          <span className="text-red-400/70">YOUR NAME</span>
          {' '}© {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-2 font-mono text-[10px] text-gray-700">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
          FILE: ACTIVE
        </div>
      </div>
    </footer>
  )
}