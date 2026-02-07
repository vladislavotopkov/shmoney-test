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
    <div className="relative h-[100svh] w-full overflow-hidden">
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
{/* desctop version */}
     <div className="absolute bottom-[5%] left-[4%] md:left-[5%] lg:left-[6%] z-20 max-w-[70%] md:max-w-[480px] transform-gpu transition-all duration-600 ease-out group-hover:-translate-y-2 group-hover:translate-x-1 hidden md:block">
  <div className="backdrop-blur-xl bg-black/10 border border-white/5 rounded-2xl px-6 py-6 md:px-8 md:py-7 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:shadow-[0_25px_60px_-15px_rgba(168,85,247,0.35)] group-hover:bg-black/15">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-[-0.03em] bg-gradient-to-br from-white via-indigo-200 to-purple-300/90 bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(168,85,247,0.6)]">
      {slide.title}
    </h2>

    <p className="mt-2 text-base md:text-lg text-white/90 font-light drop-shadow-sm group-hover:translate-x-1 transition-transform duration-400">
      {slide.description}
    </p>

    <div className="mt-4">
      <Button 
        variant="outline" 
        size="sm" 
        className="relative px-6 py-4 text-base font-semibold rounded-xl bg-transparent border border-purple-400/40 text-white hover:bg-purple-600/20 hover:border-purple-300/60 transition-all duration-400 hover:shadow-[0_0_30px_8px_rgba(168,85,247,0.3)] hover:scale-105 active:scale-98"
      >
        <span className="relative z-10">Узнать больше →</span>
      </Button>
    </div>
  </div>
</div>

{/* Мобильная версия — центрированная, текст по центру */}
<div className="absolute inset-0 z-20 flex items-end justify-center pb-[40%] md:hidden">
  <div className="backdrop-blur-xl bg-black/15 border border-white/10 rounded-2xl px-6 py-6 max-w-[90%] w-full text-center shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)]">
    <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-[-0.03em] bg-gradient-to-br from-white via-indigo-200 to-purple-300/90 bg-clip-text text-transparent drop-shadow-[0_6px_20px_rgba(168,85,247,0.7)]">
      {slide.title}
    </h2>

    <p className="mt-3 text-base sm:text-lg text-white/90 font-light drop-shadow-md">
      {slide.description}
    </p>

    <div className="mt-5">
      <Button 
        variant="outline" 
        size="sm" 
        className="relative px-7 py-4 text-base font-semibold rounded-xl bg-transparent border border-purple-400/50 text-white hover:bg-purple-600/25 hover:border-purple-300/70 transition-all duration-400 hover:shadow-[0_0_35px_10px_rgba(168,85,247,0.35)] hover:scale-105 active:scale-98 mx-auto"
      >
        <span className="relative z-10">Узнать больше →</span>
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