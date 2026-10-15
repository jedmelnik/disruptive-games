"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { nav } from "@/lib/content"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0f1923]/92 backdrop-blur-md">
      <div className="site-wrap flex h-16 items-center justify-between gap-4">
        <Link href="/" className="shrink-0" aria-label="Disruptive Games home">
          <img
            src="/brand/wordmark.svg"
            alt="Disruptive Games"
            width={150}
            height={60}
            className="h-9 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-[#f2f2f2]/80 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "h-9 rounded-sm px-4")}
          >
            Get in touch
          </Link>
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={cn(
              buttonVariants({ variant: "outline", size: "icon-lg" }),
              "border-white/20 bg-transparent text-[#f2f2f2] lg:hidden",
            )}
            aria-label="Open menu"
          >
            <Menu />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full border-white/10 bg-[#0f1923] text-[#f2f2f2] sm:max-w-sm"
          >
            <SheetHeader>
              <SheetTitle className="font-display text-2xl tracking-wide text-[#f2f2f2] uppercase">
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-4 font-display text-4xl uppercase tracking-tight"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ size: "lg" }), "mt-6 h-12 rounded-sm")}
              >
                Get in touch
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
