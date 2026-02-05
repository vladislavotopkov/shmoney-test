import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    image: "/images/blog-1.jpg",
    title: "React 19: Что нового и как использовать",
    description: "Обзор новых возможностей React 19, включая Server Components, Actions и оптимизации производительности",
    category: "React",
    readTime: "8 мин",
    date: "2 фев 2026",
  },
  {
    id: 2,
    image: "/images/blog-2.jpg",
    title: "TypeScript 5.5: Полный гайд",
    description: "Разбираем новые фичи TypeScript 5.5: improved type inference, pattern matching и многое другое",
    category: "TypeScript",
    readTime: "12 мин",
    date: "28 янв 2026",
  },
  {
    id: 3,
    image: "/images/blog-3.jpg",
    title: "Docker для разработчиков: Best Practices",
    description: "Лучшие практики работы с Docker: оптимизация образов, multi-stage builds и секреты",
    category: "DevOps",
    readTime: "10 мин",
    date: "25 янв 2026",
  },
  {
    id: 4,
    image: "/images/blog-4.jpg",
    title: "AI в разработке: Практическое применение",
    description: "Как использовать AI-инструменты для повышения продуктивности в ежедневной разработке",
    category: "AI",
    readTime: "6 мин",
    date: "20 янв 2026",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all group cursor-pointer"
            >
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/90 text-primary-foreground text-xs font-medium">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                  {post.description}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex items-center justify-between text-xs text-muted-foreground">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
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
