import type { Metadata } from "next"
import { Big_Shoulders, Outfit } from "next/font/google"
import { MobileCta } from "@/components/mobile-cta"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { studio } from "@/lib/content"
import "./globals.css"

const display = Big_Shoulders({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
})

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: {
    default: "Disruptive Games",
    template: "%s | Disruptive Games",
  },
  description: studio.description,
  metadataBase: new URL("https://disruptive-games.vercel.app"),
  openGraph: {
    title: "Disruptive Games",
    description: studio.description,
    images: [{ url: "/images/wreck-shore.jpg", width: 1920, height: 1080 }],
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0f1923] text-[#f2f2f2]">
        <SiteHeader />
        <main className="pb-20 lg:pb-0">{children}</main>
        <SiteFooter />
        <MobileCta />
      </body>
    </html>
  )
}
