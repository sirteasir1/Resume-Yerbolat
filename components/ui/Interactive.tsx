'use client'

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react'

/* ---------------------------------------------------------------------------
 * CountUp — animates a number from 0 → end once it scrolls into view.
 * ------------------------------------------------------------------------- */
export function CountUp({
  end,
  prefix = '',
  suffix = '',
  duration = 1500,
  style,
}: {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  style?: CSSProperties
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setValue(end)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1)
              // easeOutExpo
              const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
              setValue(Math.round(eased * end))
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  const formatted = value >= 1000 ? value.toLocaleString('en-US') : String(value)

  return (
    <span ref={ref} style={style}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

/* ---------------------------------------------------------------------------
 * Magnetic — pulls its child toward the cursor on hover (desktop only).
 * ------------------------------------------------------------------------- */
export function Magnetic({
  children,
  strength = 0.35,
  style,
}: {
  children: ReactNode
  strength?: number
  style?: CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(hover: none)').matches) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    }
    const onLeave = () => {
      el.style.transform = 'translate(0px, 0px)'
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])

  return (
    <div
      ref={ref}
      style={{
        display: 'inline-flex',
        transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1)',
        willChange: 'transform',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

/* ---------------------------------------------------------------------------
 * useTilt — subtle 3D tilt toward the cursor. Returns props to spread on a card.
 * ------------------------------------------------------------------------- */
export function useTilt<T extends HTMLElement = HTMLDivElement>(max = 7) {
  const ref = useRef<T>(null)

  const onMouseMove = (e: React.MouseEvent<T>) => {
    const el = ref.current
    if (!el || window.matchMedia('(hover: none)').matches) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${-py * max}deg) rotateY(${px * max}deg) translateY(-4px)`
  }
  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)'
  }

  return { ref, onMouseMove, onMouseLeave }
}
