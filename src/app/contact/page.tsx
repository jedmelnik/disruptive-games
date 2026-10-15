import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { PageHero } from "@/components/page-hero"
import { pageHeroes, studio } from "@/lib/content"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Disruptive Games about work, partnerships, and press.",
}

export default function ContactPage() {
  const hero = pageHeroes.contact
  return (
    <>
      <PageHero kicker={hero.kicker} title={hero.title} lede={hero.lede} image={hero.image} priority />
      <section>
        <div className="site-wrap grid gap-12 py-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl uppercase">Have a question or feedback?</h2>
            <p className="mt-3 text-[#c5d0d8]">The studio would like to hear from you.</p>
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="text-xs tracking-[0.18em] text-[#ff4655] uppercase">Studio</dt>
                <dd className="mt-1">
                  <a className="hover:text-white" href={`mailto:${studio.email}`}>
                    {studio.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.18em] text-[#ff4655] uppercase">Media inquiries</dt>
                <dd className="mt-1">
                  <a className="hover:text-white" href={`mailto:${studio.pressEmail}`}>
                    {studio.pressEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.18em] text-[#ff4655] uppercase">Headquarters</dt>
                <dd className="mt-1 text-[#c5d0d8]">
                  Fully remote
                  <br />
                  {studio.place}
                </dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
