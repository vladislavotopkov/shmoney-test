export default function Footer() {
  return (
    <footer className="relative w-full h-[40vh] min-h-[320px] md:min-h-[420px] lg:min-h-[520px] overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-fuchsia-950" />
      
      {/* Noise overlay — если файла noise.png нет, можно убрать или заменить на css noise */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/noise.png')] pointer-events-none mix-blend-overlay" />

      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-8 md:px-12 lg:px-16">
        <h2
          className={`
            text-[clamp(120px,16vw,340px)]
            md:text-[clamp(140px,18vw,380px)]
            lg:text-[clamp(160px,20vw,420px)]
            font-black
            text-transparent
            bg-clip-text
            bg-gradient-to-b from-white via-indigo-200 to-purple-300/90
            drop-shadow-[0_0_60px_rgba(168,85,247,0.55)] md:drop-shadow-[0_0_80px_rgba(168,85,247,0.6)]
          `}
          style={{
            textShadow: '0 0 50px rgba(168,85,247,0.4), 0 0 100px rgba(168,85,247,0.25)',
          }}
        >
          СЕНЬЁР
        </h2>
      </div>

      {/* Копирайт */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 text-center text-white/40 text-xs sm:text-sm tracking-widest uppercase">
        © {new Date().getFullYear()} · СЕНЬЁР
      </div>
    </footer>
  )
}