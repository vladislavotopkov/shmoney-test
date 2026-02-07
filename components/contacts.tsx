"use client"
export default function ContactsSection() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-black to-[#0a0a1f]">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.06)_0%,transparent_60%)]" />
      </div>
      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 text-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.05em]  bg-gradient-to-br from-white via-purple-100 to-fuchsia-200 bg-clip-text text-transparent drop-shadow-[0_10px_40px_rgba(168,85,247,0.4)] animate-fade-in-up">
          Связаться с нами
        </h2>
        <p className="mt-6 text-xl md:text-2xl lg:text-3xl font-light text-white/70 max-w-2xl mx-auto leading-relaxed">
          Пиши нам прямо сейчас — ответим максимально быстро
        </p>
        <div className="mt-12 md:mt-16 lg:mt-20 inline-flex flex-col items-center gap-3 md:gap-6 p-8 md:p-12 lg:p-16 backdrop-blur-2xl bg-black/30 border border-white/10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(168,85,247,0.3)] transition-all duration-500 hover:shadow-[0_30px_90px_-20px_rgba(168,85,247,0.5)] hover:scale-[1.02]">
          <a href="mailto:senyor@gmail.com" className="group relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 hover:from-purple-200 hover:via-fuchsia-200 hover:to-pink-200 transition-all duration-500">
            senyor@gmail.com
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
          </a>
          <button onClick={() => navigator.clipboard.writeText("senyor@gmail.com")} className="md:mt-4 px-6 py-3 text-sm font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full transition-all duration-300 flex items-center gap-2">
            <span>Скопировать email</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>
      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  )
}