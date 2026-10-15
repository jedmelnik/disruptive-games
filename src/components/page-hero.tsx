import Link from "next/link"
import { FocalBanner } from "@/components/focal-banner"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Plate } from "@/lib/content"

type Action = { href: string; label: string; external?: boolean }

type Props = {
  kicker?: string
  title: string
  lede?: string
  ledeMore?: string
  image: Plate
  primary?: Action
  secondary?: Action
  home?: boolean
  priority?: boolean
}

function ActionLink({
  action,
  tone,
  className,
}: {
  action: Action
  tone: "primary" | "secondary"
  className?: string
}) {
  const classNames = cn(
    buttonVariants({ variant: tone === "primary" ? "default" : "outline", size: "lg" }),
    "h-11 rounded-sm px-5 text-sm tracking-wide",
    tone === "secondary" && "border-white/25 bg-transparent text-[#f2f2f2] hover:bg-white/10",
    className,
  )
  if (action.external) {
    return (
      <a href={action.href} className={classNames} target="_blank" rel="noopener noreferrer">
        {action.label}
      </a>
    )
  }
  return (
    <Link href={action.href} className={classNames}>
      {action.label}
    </Link>
  )
}

export function PageHero({
  kicker,
  title,
  lede,
  ledeMore,
  image,
  primary,
  secondary,
  home = false,
  priority = false,
}: Props) {
  const alignRight = image.align === "right"

  return (
    <section className="relative overflow-hidden bg-[#0f1923] text-[#f2f2f2]">
      <FocalBanner
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        focalX={image.focalX}
        focalY={image.focalY}
        fillFrame={image.fillFrame}
        bleed={image.bleed}
        subject={image.subject}
        align={image.align}
        priority={priority}
      />
      <div
        className={cn(
          "site-wrap relative z-10",
          home ? "py-14 sm:py-16 lg:py-20" : "py-10 sm:py-12 lg:py-14",
        )}
      >
        <div className={cn("max-w-xl", alignRight && "lg:ml-auto lg:text-right")}>
          {kicker ? (
            <p className="text-xs font-medium tracking-[0.22em] text-[#ff4655] uppercase">
              {kicker}
            </p>
          ) : null}
          <h1
            className={cn(
              "font-display mt-3 text-balance uppercase leading-[0.88] tracking-tight",
              home
                ? "text-6xl sm:text-7xl lg:text-8xl"
                : "text-4xl sm:text-5xl lg:text-6xl",
            )}
          >
            {title}
          </h1>
          <div
            className={cn(
              "mt-4 h-px w-12 bg-[#ff4655]",
              alignRight && "lg:ml-auto",
            )}
          />
          {lede ? (
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#f2f2f2]/90 sm:text-lg">
              {lede}
              {ledeMore ? <span className="hidden sm:inline"> {ledeMore}</span> : null}
            </p>
          ) : null}
          {primary || secondary ? (
            <div
              className={cn(
                "mt-6 flex flex-wrap gap-3",
                alignRight && "lg:justify-end",
              )}
            >
              {primary ? <ActionLink action={primary} tone="primary" /> : null}
              {secondary ? (
                <ActionLink action={secondary} tone="secondary" className="hidden sm:inline-flex" />
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
