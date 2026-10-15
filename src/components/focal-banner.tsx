"use client"

import { useLayoutEffect, useRef, useState } from "react"
import type { SubjectBox } from "@/lib/content"

const INK = "#0f1923"

type Frame = {
  left: number
  top: number
  width: number
  height: number
  desktop: boolean
  fade: boolean
  insetFade: boolean
}

type Props = {
  src: string
  width: number
  height: number
  alt: string
  focalX: number
  focalY: number
  fillFrame?: boolean
  bleed?: boolean
  subject?: SubjectBox
  targetX?: number
  align?: "left" | "right"
  priority?: boolean
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function layoutFrame(
  planeW: number,
  planeH: number,
  imageW: number,
  imageH: number,
  focalX: number,
  focalY: number,
  fillFrame: boolean,
  subject: SubjectBox | undefined,
  align: "left" | "right",
  targetX: number,
  windowW: number,
): Frame {
  const desktop = planeW >= 1024
  if (!desktop) {
    const cover = Math.max(planeW / imageW, planeH / imageH)
    const fx = clamp(focalX, 0.12, 0.88)
    const fy = clamp(focalY, 0.12, 0.88)
    const scale = Math.max(
      cover,
      planeW / 2 / (fx * imageW),
      planeW / 2 / ((1 - fx) * imageW),
      planeH / 2 / (fy * imageH),
      planeH / 2 / ((1 - fy) * imageH),
    )
    const sW = imageW * scale
    const sH = imageH * scale
    let left = planeW * 0.5 - focalX * sW
    let top = planeH * 0.5 - focalY * sH
    left = clamp(left, planeW - sW, 0)
    top = clamp(top, planeH - sH, 0)
    return { left, top, width: sW, height: sH, desktop: false, fade: false, insetFade: false }
  }

  let left = 0
  let top = 0
  let sW = 0
  let sH = 0

  if (fillFrame && subject) {
    const subH = Math.max(0.2, subject.b - subject.t) * imageH
    let scale = planeH / subH
    if (imageW * scale > planeW) scale = planeW / imageW
    sW = imageW * scale
    sH = imageH * scale
    top = clamp(-subject.t * sH, planeH - sH, 0)
    const minLeft = Math.min(0, planeW - sW)
    const maxLeft = Math.max(0, planeW - sW)
    if (align === "right") {
      // Type sits on the right, so keep the picture on the left.
      left = 0
      left = Math.max(left, -subject.l * sW)
      left = Math.min(left, planeW - subject.r * sW)
    } else {
      left = planeW - sW
      left = Math.min(left, planeW - subject.r * sW)
      left = Math.max(left, -subject.l * sW)
    }
    left = clamp(left, minLeft, maxLeft)
  } else {
    const scale = Math.min(planeW / imageW, planeH / imageH)
    sW = imageW * scale
    sH = imageH * scale
    const screenX = align === "right" ? 1 - targetX : targetX
    left = screenX * planeW - focalX * sW
    const minLeft = Math.min(0, planeW - sW)
    const maxLeft = Math.max(0, planeW - sW)
    left = clamp(left, minLeft, maxLeft)
    top = sH < planeH - 1 ? planeH - sH : 0
  }

  return {
    left,
    top,
    width: sW,
    height: sH,
    desktop: true,
    fade: windowW >= 1600,
    insetFade: left > 8 && !(fillFrame && subject),
  }
}

export function FocalBanner({
  src,
  width,
  height,
  alt,
  focalX,
  focalY,
  fillFrame = false,
  bleed = false,
  subject,
  targetX = 0.78,
  align = "left",
  priority = false,
}: Props) {
  const planeRef = useRef<HTMLDivElement>(null)
  const [frame, setFrame] = useState<Frame | null>(null)
  const subjectKey = subject ? `${subject.l},${subject.t},${subject.r},${subject.b}` : ""

  useLayoutEffect(() => {
    const plane = planeRef.current
    if (!plane) return

    const measure = () => {
      const planeW = plane.clientWidth
      const planeH = plane.clientHeight
      if (planeW < 2 || planeH < 2) return
      setFrame(
        layoutFrame(
          planeW,
          planeH,
          width,
          height,
          focalX,
          focalY,
          fillFrame,
          subject,
          align,
          targetX,
          window.innerWidth,
        ),
      )
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(plane)
    window.addEventListener("resize", measure)
    return () => {
      observer.disconnect()
      window.removeEventListener("resize", measure)
    }
    // subjectKey stands in for the subject object.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height, focalX, focalY, fillFrame, subjectKey, align, targetX])

  const scrim = align === "right"
    ? `linear-gradient(to left, rgba(15,25,35,0.9) 0%, rgba(15,25,35,0.62) 14%, rgba(15,25,35,0.22) 30%, transparent 46%)`
    : bleed
      ? `linear-gradient(to right, rgba(15,25,35,0.92) 0%, rgba(15,25,35,0.7) 14%, rgba(15,25,35,0.28) 30%, transparent 48%)`
      : `linear-gradient(to right, rgba(15,25,35,0.9) 0%, rgba(15,25,35,0.62) 12%, rgba(15,25,35,0.22) 28%, transparent 46%)`

  return (
    <div
      ref={planeRef}
      className="pointer-events-none absolute inset-y-0 left-1/2 h-full w-full max-w-[1600px] -translate-x-1/2 overflow-hidden"
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="absolute max-w-none"
        style={
          frame
            ? {
                left: frame.left,
                top: frame.top,
                width: frame.width,
                height: frame.height,
                transform: "none",
              }
            : {
                left: "50%",
                top: "50%",
                width: "auto",
                height: "160%",
                transform: "translate(-50%, -50%)",
              }
        }
      />
      <div className="absolute inset-0 bg-[#0f1923]/55 lg:hidden" />
      <div className="absolute inset-0 hidden lg:block" style={{ background: scrim }} />
      {frame?.insetFade ? (
        <div
          className="absolute inset-y-0 hidden lg:block"
          style={{
            left: frame.left,
            width: 48,
            background: `linear-gradient(to right, ${INK}, transparent)`,
          }}
        />
      ) : null}
      {frame?.fade ? (
        <div
          className="absolute hidden lg:block"
          style={{
            left: frame.left + frame.width - 220,
            top: frame.top,
            width: 220,
            height: frame.height,
            background: `linear-gradient(to right, transparent, ${INK})`,
          }}
        />
      ) : null}
    </div>
  )
}
