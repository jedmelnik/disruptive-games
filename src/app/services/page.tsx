import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { pageHeroes, qualifications, services, strengths } from "@/lib/content"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Real-time multiplayer, tech art, VFX, and shipping engineering from Disruptive Games.",
}

export default function ServicesPage() {
  const hero = pageHeroes.services
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
        <div className="site-wrap max-w-3xl py-14">
          <p className="text-lg leading-relaxed">
            Disruptive Games is an independent studio founded by industry veterans who have worked on some of the most recognizable console games in the world. The focus is the highest quality gameplay, especially what connected play can do.
          </p>
        </div>
      </section>
      {services.map((group) => (
        <section key={group.title} className="border-t border-white/10">
          <div className="site-wrap grid gap-8 py-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-4xl uppercase leading-none">{group.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#9aa8b5]">{group.lede}</p>
            </div>
            <dl className="lg:col-span-7 lg:col-start-6">
              {group.items.map((item) => (
                <div key={item.title} className="border-t border-white/10 py-4 first:border-t-0 first:pt-0">
                  <dt className="text-sm font-medium">{item.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-[#c5d0d8]">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ))}
      <section className="border-t border-white/10 bg-[#121b27]">
        <div className="site-wrap py-14">
          <h2 className="font-display text-4xl uppercase">Key strengths</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((item) => (
              <li key={item.title}>
                <h3 className="text-sm font-medium">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#c5d0d8]">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border-t border-white/10">
        <div className="site-wrap py-14">
          <h2 className="font-display text-4xl uppercase">Team qualifications</h2>
          <dl className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {qualifications.map((item) => (
              <div key={item.title} className="grid gap-1 py-4 sm:grid-cols-12">
                <dt className="text-sm font-medium sm:col-span-4">{item.title}</dt>
                <dd className="text-sm text-[#c5d0d8] sm:col-span-8">{item.detail}</dd>
              </div>
            ))}
          </dl>
          <Link href="/contact" className="mt-8 inline-flex text-sm text-[#ff4655] hover:text-white">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  )
}
