import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { games, homeHero, partners, studio } from "@/lib/content"

const featured = games.filter((game) => game.featured && game.slug !== "wreck-runners")

export default function HomePage() {
  return (
    <>
      <link rel="preload" as="image" href={homeHero.src} fetchPriority="high" />
      <PageHero
        home
        priority
        kicker="Now playing"
        title="Wreck Runners"
        lede="The Bermuda Triangle is full of things that shouldn't be there."
        ledeMore="The Trustwell Corporation would like you to retrieve them."
        image={homeHero}
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: studio.steam, label: "Play on Steam", external: true }}
      />

      <section className="border-b border-white/10">
        <div className="site-wrap grid gap-8 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium tracking-[0.22em] text-[#ff4655] uppercase">
              The studio
            </p>
            <h2 className="font-display mt-3 text-5xl uppercase leading-none">
              We are Disruptive Games
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg leading-relaxed text-[#f2f2f2]/90">
              {studio.description} The team is 13 people, fully remote, headquartered in{" "}
              {studio.place}. They build games where everything can go wrong at the same time.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#9aa8b5]">
              Right now they are making Wreck Runners.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex text-sm tracking-wide text-[#ff4655] hover:text-white"
            >
              About the studio
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="site-wrap py-16 lg:py-20">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-5xl uppercase leading-none sm:text-6xl">
              The work
            </h2>
            <Link href="/games" className="hidden text-sm text-[#ff4655] sm:inline hover:text-white">
              All games
            </Link>
          </div>
          <div className="mt-8">
            {featured.map((game, index) => (
              <article
                key={game.slug}
                className="grid items-center gap-6 border-t border-white/10 py-8 lg:grid-cols-12 lg:gap-10 lg:py-12"
              >
                <Link
                  href={`/games/${game.slug}`}
                  className={index % 2 === 1 ? "lg:col-span-7 lg:col-start-6 lg:row-start-1" : "lg:col-span-7"}
                >
                  <img
                    src={game.still.src}
                    alt={game.still.alt}
                    width={game.still.width}
                    height={game.still.height}
                    className="h-auto w-full"
                  />
                </Link>
                <div className={index % 2 === 1 ? "lg:col-span-4 lg:col-start-1 lg:row-start-1" : "lg:col-span-4 lg:col-start-9"}>
                  <p className="text-xs tracking-[0.18em] text-[#ff4655] uppercase">
                    {game.clientKind} · {game.client}
                  </p>
                  <h3 className="font-display mt-2 text-4xl uppercase leading-none sm:text-5xl">
                    <Link href={`/games/${game.slug}`} className="hover:text-[#ff4655]">
                      {game.title}
                    </Link>
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[#c5d0d8]">{game.summary}</p>
                  <Link
                    href={`/games/${game.slug}`}
                    className="mt-4 inline-flex text-sm text-[#f2f2f2] underline decoration-[#ff4655] underline-offset-4"
                  >
                    View project
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <Link
            href="/games"
            className="mt-2 inline-flex border border-white/15 px-4 py-3 text-sm sm:hidden"
          >
            See every title
          </Link>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#121b27]">
        <div className="site-wrap grid gap-8 py-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.22em] text-[#ff4655] uppercase">Services</p>
            <h2 className="font-display mt-3 text-5xl uppercase leading-none">
              Connected play, shipped
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[#c5d0d8]">
              Real-time multiplayer, live operations, tech art, and the engineering that gets a title through compliance.
            </p>
            <Link href="/services" className="mt-4 inline-flex text-sm text-[#ff4655] hover:text-white">
              What the studio takes on
            </Link>
          </div>
        </div>
      </section>

      <section className="hidden lg:block">
        <div className="site-wrap py-14">
          <p className="text-xs tracking-[0.22em] text-[#9aa8b5] uppercase">Partners and clients</p>
          <ul className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-6">
            {partners.map((partner) => (
              <li key={partner.name}>
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="h-7 w-auto max-w-[140px] object-contain opacity-80"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
