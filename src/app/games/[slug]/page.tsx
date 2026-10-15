import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/page-hero"
import { SocialLinks } from "@/components/social-links"
import { games, getGame } from "@/lib/content"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const game = getGame(slug)
  if (!game) return { title: "Game" }
  return { title: game.title, description: game.summary }
}

export default async function GamePage({ params }: Props) {
  const { slug } = await params
  const game = getGame(slug)
  if (!game) notFound()
  const index = games.findIndex((item) => item.slug === game.slug)
  const next = games[(index + 1) % games.length]

  return (
    <>
      <PageHero
        kicker={game.clientKind === "Studio" ? "Original" : game.clientKind}
        title={game.title}
        lede={game.lede}
        image={game.hero}
        priority
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={
          game.steam
            ? { href: game.steam, label: "Play on Steam", external: true }
            : undefined
        }
      />
      <section>
        <div className="site-wrap grid gap-12 py-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs tracking-[0.18em] text-[#ff4655] uppercase">{game.clientKind}</p>
            <p className="font-display mt-2 text-3xl uppercase">{game.client}</p>
            {game.platforms ? (
              <p className="mt-4 text-sm text-[#9aa8b5]">Platforms: {game.platforms}</p>
            ) : null}
            {game.steam ? (
              <SocialLinks
                className="mt-4 flex"
                links={[{ network: "steam", href: game.steam, label: "Wreck Runners on Steam" }]}
              />
            ) : null}
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg leading-relaxed text-[#f2f2f2]/90">{game.summary}</p>
            <dl className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {game.scope.map((item) => (
                <div key={item.title} className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-6">
                  <dt className="text-sm font-medium sm:col-span-4">{item.title}</dt>
                  <dd className="text-sm leading-relaxed text-[#c5d0d8] sm:col-span-8">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      {game.gallery.length > 0 ? (
        <section className="border-t border-white/10">
          <div className="site-wrap py-12">
            <h2 className="font-display text-4xl uppercase">Gallery</h2>
            <ul className="mt-6 grid gap-4 lg:grid-cols-2">
              {game.gallery.map((shot) => (
                <li key={shot.src} className={shot.width / shot.height < 0.9 ? "lg:col-span-1" : ""}>
                  <img src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} className="h-auto w-full" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
      {next ? (
        <section className="border-t border-white/10">
          <div className="site-wrap flex items-center justify-between gap-6 py-10">
            <p className="text-xs tracking-[0.18em] text-[#9aa8b5] uppercase">Next</p>
            <Link href={`/games/${next.slug}`} className="font-display text-3xl uppercase hover:text-[#ff4655] sm:text-5xl">
              {next.title}
            </Link>
          </div>
        </section>
      ) : null}
    </>
  )
}
