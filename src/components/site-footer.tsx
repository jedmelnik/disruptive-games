import Link from "next/link"
import { SocialLinks } from "@/components/social-links"
import { nav, studio } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0b121b] text-[#f2f2f2]">
      <div className="site-wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <img
            src="/brand/wordmark.svg"
            alt="Disruptive Games"
            width={150}
            height={60}
            className="h-10 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#9aa8b5]">
            Independent game studio. Fully remote, headquartered in {studio.place}.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.18em] text-[#ff4655] uppercase">Studio</p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.18em] text-[#ff4655] uppercase">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="hover:text-white" href={`mailto:${studio.email}`}>
                {studio.email}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={`mailto:${studio.pressEmail}`}>
                Press: {studio.pressEmail}
              </a>
            </li>
            <li className="text-[#9aa8b5]">{studio.place}</li>
          </ul>
          <SocialLinks
            className="mt-4 flex gap-3"
            links={[{ network: "steam", href: studio.steam, label: "Wreck Runners on Steam" }]}
          />
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="site-wrap py-4 text-xs text-[#9aa8b5]">
          © 2026 Disruptive Games. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
