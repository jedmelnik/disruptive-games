import { siSteam } from "simple-icons"

const marks = {
  steam: siSteam.path,
} as const

type Network = keyof typeof marks

type LinkItem = {
  network: Network
  href: string
  label: string
}

export function SocialLinks({ links, className }: { links: LinkItem[]; className?: string }) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.network}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.label} (opens in new tab)`}
            className="inline-flex size-6 items-center justify-center text-current transition-opacity hover:opacity-70"
          >
            <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
              <path d={marks[link.network]} fill="currentColor" />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
