import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { games, pageHeroes } from "@/lib/content"

export const metadata: Metadata = {
  title: "Games",
  description: "Games Disruptive Games has shipped and the online work behind them.",
}

export default function GamesPage() {
  const hero = pageHeroes.games
  return (
    <>
      <PageHero kicker={hero.kicker} title={hero.title} lede={hero.lede} image={hero.image} priority />
      <section>
        <div className="site-wrap py-12 lg:py-16">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {games.map((game) => (
              <li key={game.slug}>
                <Link
                  href={`/games/${game.slug}`}
                  className="grid gap-4 py-6 sm:grid-cols-12 sm:items-center sm:gap-8"
                >
                  <img
                    src={game.still.src}
                    alt=""
                    width={game.still.width}
                    height={game.still.height}
                    className="h-auto w-full sm:col-span-4"
                  />
                  <div className="sm:col-span-8">
                    <p className="text-xs tracking-[0.18em] text-[#ff4655] uppercase">
                      {game.clientKind} · {game.client}
                    </p>
                    <h2 className="font-display mt-1 text-4xl uppercase leading-none">{game.title}</h2>
                    <p className="mt-2 max-w-xl text-sm text-[#c5d0d8]">{game.summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
