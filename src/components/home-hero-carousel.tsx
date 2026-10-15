"use client"

import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { HomeSlide } from "@/lib/content"

type Props = {
  slides: HomeSlide[]
}

export function HomeHeroCarousel({ slides }: Props) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const slide = slides[index]

  const go = useCallback(
    (next: number) => {
      setIndex((current) => {
        const total = slides.length
        return ((next % total) + total) % total
      })
    },
    [slides.length],
  )

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === index) {
        video.currentTime = 0
        void video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [index])

  useEffect(() => {
    if (paused || slides.length < 2) return
    const durationMs = Math.max(7000, Math.round((slide.durationSec || 10) * 1000))
    const timer = window.setTimeout(() => go(index + 1), durationMs)
    return () => window.clearTimeout(timer)
  }, [index, paused, go, slide.durationSec, slides.length])

  return (
    <section
      className="relative overflow-hidden bg-[#0f1923] text-[#f2f2f2]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
      aria-roledescription="carousel"
      aria-label="Featured projects"
    >
      <div className="pointer-events-none absolute inset-y-0 left-1/2 h-full w-full max-w-[1600px] -translate-x-1/2 overflow-hidden">
        {slides.map((item, i) => (
          <div
            key={item.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              i === index ? "opacity-100" : "opacity-0",
            )}
            aria-hidden={i !== index}
          >
            {/* Poster under the loop so the first paint is never an empty ink field. */}
            <img
              src={item.poster}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
            />
            <video
              ref={(node) => {
                videoRefs.current[i] = node
              }}
              className="absolute inset-0 h-full w-full object-cover"
              poster={item.poster}
              muted
              playsInline
              loop
              autoPlay={i === index}
              preload={i === 0 ? "auto" : "metadata"}
              aria-label={item.alt}
            >
              <source src={item.src} type="video/mp4" />
            </video>
          </div>
        ))}
        <div className="absolute inset-0 bg-[#0f1923]/55 lg:hidden" />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(to right, rgba(15,25,35,0.92) 0%, rgba(15,25,35,0.7) 14%, rgba(15,25,35,0.28) 30%, transparent 48%)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 hidden w-[220px] min-[1600px]:block"
          style={{ background: "linear-gradient(to right, transparent, #0f1923)" }}
        />
      </div>

      <div className="site-wrap relative z-10 py-14 sm:py-16 lg:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-medium tracking-[0.22em] text-[#ff4655] uppercase">
            {slide.kicker}
          </p>
          <h1 className="font-display mt-3 text-balance text-6xl uppercase leading-[0.88] tracking-tight sm:text-7xl lg:text-8xl">
            {slide.title}
          </h1>
          <div className="mt-4 h-px w-12 bg-[#ff4655]" />
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#f2f2f2]/90 sm:text-lg">
            {slide.lede}
            {slide.ledeMore ? (
              <span className="hidden sm:inline"> {slide.ledeMore}</span>
            ) : null}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "h-11 rounded-sm px-5 text-sm tracking-wide",
              )}
            >
              Get in touch
            </Link>
            {slide.secondary ? (
              slide.secondary.external ? (
                <a
                  href={slide.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "hidden h-11 rounded-sm border-white/25 bg-transparent px-5 text-sm tracking-wide text-[#f2f2f2] hover:bg-white/10 sm:inline-flex",
                  )}
                >
                  {slide.secondary.label}
                </a>
              ) : (
                <Link
                  href={slide.secondary.href}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "hidden h-11 rounded-sm border-white/25 bg-transparent px-5 text-sm tracking-wide text-[#f2f2f2] hover:bg-white/10 sm:inline-flex",
                  )}
                >
                  {slide.secondary.label}
                </Link>
              )
            ) : null}
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-[#f2f2f2] transition hover:border-[#ff4655] hover:text-[#ff4655]"
            aria-label="Previous project"
            onClick={() => go(index - 1)}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-[#f2f2f2] transition hover:border-[#ff4655] hover:text-[#ff4655]"
            aria-label="Next project"
            onClick={() => go(index + 1)}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="ml-2 flex items-center gap-2" role="tablist" aria-label="Slides">
            {slides.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show ${item.title}`}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition",
                  i === index ? "bg-[#ff4655]" : "bg-white/35 hover:bg-white/70",
                )}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
