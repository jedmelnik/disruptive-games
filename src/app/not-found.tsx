import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <section className="site-wrap py-24">
      <p className="text-xs tracking-[0.22em] text-[#ff4655] uppercase">404</p>
      <h1 className="font-display mt-3 text-6xl uppercase">That page is not on the manifest.</h1>
      <p className="mt-4 max-w-md text-[#c5d0d8]">The link may have moved. The studio site is still here.</p>
      <Link href="/" className={cn(buttonVariants({ size: "lg" }), "mt-8 h-11 rounded-sm px-5")}>
        Back to the studio
      </Link>
    </section>
  )
}
