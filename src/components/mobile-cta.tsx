"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function MobileCta() {
  const pathname = usePathname()
  if (pathname === "/contact") return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-[#0f1923]/95 p-3 backdrop-blur lg:hidden">
      <Link
        href="/contact"
        className={cn(buttonVariants({ size: "lg" }), "h-11 w-full rounded-sm")}
      >
        Get in touch
      </Link>
    </div>
  )
}
