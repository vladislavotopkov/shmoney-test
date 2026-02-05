"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/images/banner-1.jpg",
    title: "Технический обзор IT-технологий",
    description: "Глубокий анализ современных технологий и инструментов разработки",
  },
  {
    image: "/images/banner-2.jpg",
    title: "Языки программирования",
    description: "Обзоры, сравнения и лучшие практики популярных языков",
  },
  {
    image: "/images/banner-3.jpg",
    title: "Лайфхаки в разработке",
    description: "Советы и трюки для повышения продуктивности",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-background/80 dark:bg-background/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-3xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
                {slide.description}
              </p>
              <Button size="lg" className="font-semibold">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-foreground/10 hover:bg-foreground/20 dark:bg-background/20 dark:hover:bg-background/40 text-foreground"
        onClick={prevSlide}
        aria-label="Предыдущий слайд"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-foreground/10 hover:bg-foreground/20 dark:bg-background/20 dark:hover:bg-background/40 text-foreground"
        onClick={nextSlide}
        aria-label="Следующий слайд"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-primary"
                : "w-2 bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
