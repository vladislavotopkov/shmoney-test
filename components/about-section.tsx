import { Code, Lightbulb, Zap, Users } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Технические обзоры",
    description: "Глубокий анализ технологий, фреймворков и инструментов разработки",
  },
  {
    icon: Lightbulb,
    title: "Лайфхаки",
    description: "Практические советы для повышения продуктивности в разработке",
  },
  {
    icon: Zap,
    title: "Актуальность",
    description: "Следим за последними трендами и новинками IT-индустрии",
  },
  {
    icon: Users,
    title: "Сообщество",
    description: "Объединяем разработчиков для обмена опытом и знаниями",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Опционально: очень лёгкий градиентный фон для атмосферы */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(270,40%,12%)] to-[hsl(var(--background))] opacity-80 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-5">
            О нас
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Сеньёр — это платформа для разработчиков, где мы делимся глубокими техническими обзорами, исследуем языки программирования и собираем лучшие практики индустрии.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`
                group relative rounded-2xl p-6 md:p-7
                bg-card/40 backdrop-blur-xl backdrop-saturate-150
                border border-border/40
                shadow-[0_8px_32px_-12px_rgba(0,0,0,0.4)]
                transition-all duration-500 ease-out
                hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.35)]
                hover:scale-[1.04] hover:-translate-y-1.5
                overflow-hidden
              `}
              style={{
                animationDelay: `${i * 120}ms`,
              }}
            >
              {/* Очень лёгкий градиентный оверлей при hover */}
              <div className="
                absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 
                opacity-0 group-hover:opacity-100 transition-opacity duration-700
              " />

              {/* Иконка в красивом круге/подушке */}
              <div className="
                relative h-14 w-14 rounded-xl 
                bg-gradient-to-br from-primary/20 to-accent/10 
                flex items-center justify-center mb-6
                ring-1 ring-primary/20 group-hover:ring-primary/40
                transition-all duration-400 group-hover:scale-110
                shadow-inner
              ">
                <feature.icon className="h-7 w-7 text-primary transition-transform duration-500 group-hover:rotate-12" />
              </div>

              <h3 className="
                text-xl font-semibold text-foreground mb-3
                bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent
              ">
                {feature.title}
              </h3>

              <p className="text-muted-foreground text-base leading-relaxed">
                {feature.description}
              </p>

              {/* Тонкая линия-подсветка снизу при hover */}
              <div className="
                absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r 
                from-transparent via-primary/60 to-transparent 
                scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center
              " />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}