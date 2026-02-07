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
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            О нас
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Сеньёр — это платформа для разработчиков, где мы делимся 
            техническими обзорами, исследуем языки программирования и 
            собираем лучшие практики индустрии.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors group"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
