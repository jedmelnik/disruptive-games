"use client"

import { FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { studio } from "@/lib/content"

export function ContactForm() {
  const [error, setError] = useState("")

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const message = String(data.get("message") || "").trim()
    if (!name || !email || !message) {
      setError("Add your name, email, and a note.")
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("That email does not look complete.")
      return
    }
    setError("")
    const subject = encodeURIComponent(`Note from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\n${email}`)
    window.location.href = `mailto:${studio.email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" autoComplete="name" required className="h-11 bg-[#0f1923]" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="h-11 bg-[#0f1923]"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required rows={6} className="bg-[#0f1923]" />
      </div>
      {error ? <p className="text-sm text-[#ff4655]">{error}</p> : null}
      <Button type="submit" size="lg" className="h-11 rounded-sm px-5">
        Email the studio
      </Button>
      <p className="text-xs leading-relaxed text-[#9aa8b5]">
        This opens your email app with the note addressed to {studio.email}. Nothing is stored on this site.
      </p>
    </form>
  )
}
