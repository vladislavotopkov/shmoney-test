"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

const slides = [
  {
    image: "/images/hero/1.png",
    title: "Технический обзор IT-технологий",
    description: "Глубокий анализ современных технологий и инструментов разработки",
  },
  {
    image: "/images/hero/2.png",
    title: "Языки программирования",
    description: "Обзоры, сравнения и лучшие практики популярных языков",
  },
  {
    image: "/images/hero/3.png",
    title: "Лайфхаки в разработке",
    description: "Советы и трюки для повышения продуктивности",
  },
]

export function HeroSlider() {
  return (
    <div className="relative h-[500px] md:h-[100svh] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="slide"
        speed={1200}
        
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
        allowTouchMove={false}
        pagination={{ clickable: false }}
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover brightness-[0.50]"
                priority={idx === 0}
              />

              {/* Левый нижний блок с контентом */}
              <div className="absolute bottom-12 left-6 md:bottom-16 md:left-10 lg:bottom-20 lg:left-44  z-10 max-w-lg">
                <div className="text-left space-y-4 md:space-y-5">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">
                    {slide.title}
                  </h2>

                  <p className="text-lg md:text-xl text-white/90 font-medium drop-shadow-md">
                    {slide.description}
                  </p>

                  <div className="pt-2">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white font-semibold px-8"
                      onClick={() => console.log("clicked!")}
                    >
                      Узнать больше
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кастомизация пагинации и стрелок (опционально) */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: white;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          opacity: 0.7;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  )
}