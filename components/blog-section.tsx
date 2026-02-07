import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    image: "/images/hero/1.png",
    title: "React 19: Что нового и как использовать в реальных проектах 2026 года",
    description: "Обзор новых возможностей React 19, включая Server Components, Actions, улучшенную производительность, новые хуки и как это всё влияет на архитектуру современных приложений.",
    category: "React",
    readTime: "8 мин",
    date: "2 фев 2026",
  },
  {
    id: 2,
    image: "/images/hero/2.png",
    title: "TypeScript 5.5: Полный гайд по новым возможностям и улучшениям",
    description: "Разбираем все новые фичи TypeScript 5.5: улучшенный type inference, pattern matching, улучшенная работа с union types, новые утилиты и как мигрировать проекты без боли.",
    category: "TypeScript",
    readTime: "12 мин",
    date: "28 янв 2026",
  },
  {
    id: 3,
    image: "/images/hero/3.png",
    title: "Docker для разработчиков: Best Practices и оптимизация в 2026",
    description: "Лучшие практики работы с Docker: оптимизация размера образов, multi-stage builds, эффективное использование кэша, работа с секретами, security scanning и интеграция в CI/CD.",
    category: "DevOps",
    readTime: "10 мин",
    date: "25 янв 2026",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Последние статьи
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Свежие материалы о технологиях, языках программирования и разработке
            </p>
          </div>
          <Link href="#" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-border text-foreground hover:bg-secondary gap-2 group bg-transparent">
              Читать больше
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {blogPosts.slice(0, 3).map((post) => (
            <Card
              key={post.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[hsl(270,40%,10%)] via-black to-[hsl(220,35%,8%)] border-2 border-primary/50 shadow-[0_0_50px_rgba(var(--primary-rgb),0.35),inset_0_0_20px_rgba(var(--primary-rgb),0.1)] transition-all duration-600 hover:border-primary/80 hover:shadow-[0_0_100px_rgba(var(--primary-rgb),0.7),0_0_40px_rgba(var(--accent-rgb),0.3)] hover:scale-[1.04] backdrop-blur-xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/20 before:via-transparent before:to-accent/25 before:opacity-60 before:transition-opacity hover:before:opacity-90"
            >
              <CardHeader className="p-0 relative">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-all duration-900 group-hover:scale-115 group-hover:brightness-[1.18] group-hover:saturate-160"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-75" />
                  <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-50 bg-[radial-gradient(circle_at_35%_65%,hsl(var(--primary)/0.55),transparent_70%)] group-hover:opacity-80 transition-opacity duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/30 backdrop-blur-xl border border-primary/70 text-white font-bold text-xs tracking-wide uppercase shadow-[0_0_20px_hsl(var(--primary)/0.6)] group-hover:shadow-[0_0_40px_hsl(var(--primary)/1)] transition-all duration-500 animate-pulse-slow">
  <Tag className="h-3 w-3" />
  {post.category}
</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-5 relative z-10">
                <h3 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary mb-2.5 line-clamp-4 leading-tight group-hover:from-accent group-hover:via-primary group-hover:to-accent transition-all duration-700 tracking-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground/95 text-sm leading-relaxed line-clamp-5 group-hover:text-foreground transition-colors duration-400">
                  {post.description}
                </p>
              </CardContent>
              <CardFooter className="px-5 pb-5 pt-1 flex justify-between text-xs uppercase tracking-wider font-medium text-primary/90 group-hover:text-primary transition-colors">
                <span>{post.date}</span>
                <span className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}