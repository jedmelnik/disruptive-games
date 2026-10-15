import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { leaders, pageHeroes, studio } from "@/lib/content"

export const metadata: Metadata = {
  title: "About",
  description:
    "Disruptive Games is a small, fully remote studio headquartered in Oakland, California.",
}

export default function AboutPage() {
  const hero = pageHeroes.about
  return (
    <>
      <PageHero
        kicker={hero.kicker}
        title={hero.title}
        lede={hero.lede}
        image={hero.image}
        priority
        primary={{ href: "/contact", label: "Get in touch" }}
      />
      <section>
        <div className="site-wrap grid gap-10 py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl uppercase leading-none">13 people. One remote studio.</h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-[#f2f2f2]/90 lg:col-span-6 lg:col-start-7">
            <p>
              Disruptive Games is a small, fully remote studio headquartered in {studio.place}.
            </p>
            <p>
              The team likes making games where everything can go wrong at the same time. People cross disciplines - artists who code, engineers who obsess over feel - because that is how something actually plays well.
            </p>
            <p>They are making Wreck Runners.</p>
          </div>
        </div>
      </section>
      <section className="border-y border-white/10">
        <img
          src="/images/concept-coast.webp"
          alt="Painted concept of a grounded aircraft beside a tropical coast."
          width={1913}
          height={782}
          className="h-auto w-full"
        />
      </section>
      <section>
        <div className="site-wrap py-14">
          <h2 className="font-display text-4xl uppercase">Leadership</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {leaders.map((person) => (
              <li key={person.name} className="border-t border-white/15 pt-4">
                <p className="font-display text-4xl uppercase">{person.name}</p>
                <p className="mt-1 text-sm text-[#9aa8b5]">{person.role}</p>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="mt-10 inline-flex text-sm text-[#ff4655] hover:text-white">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
