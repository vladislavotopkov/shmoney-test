"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

export function FloatingHeader() {
  return (
    <header
      className={cn(
        "fixed top-6 right-6 z-[100]",
        "bg-white/80 backdrop-blur-2xl",
        "border border-black/8",
        "rounded-full",
        "shadow-[0_10px_40px_-12px_rgba(0,0,0,0.18)]",
        "px-8 py-4",
        "transition-all duration-400 ease-out",
        "hover:bg-white/90 hover:shadow-[0_16px_60px_-16px_rgba(0,0,0,0.25)]",
        "hover:scale-[1.02]"
      )}
    >
      <nav className="flex items-center gap-10 text-sm font-medium tracking-wide">
        <Link
          href="/"
          className="text-black/85 hover:text-black transition-colors duration-200"
        >
          Главная
        </Link>

        <Link
          href="/blog"
          className="text-black/85 hover:text-black transition-colors duration-200"
        >
          Блог
        </Link>

        <Link
          href="/about"
          className="text-black/85 hover:text-black transition-colors duration-200"
        >
          О нас
        </Link>
      </nav>
    </header>
  )
}