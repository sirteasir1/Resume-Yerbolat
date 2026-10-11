'use client'

import { useEffect, useRef } from 'react'
import { BEYOND_DATA } from '@/lib/data'

export function Beyond() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    sectionRef.current?.querySelectorAll('.rv').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="beyond"
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Section label */}
      <div className="rv" style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
        letterSpacing: '0.2em', color: 'var(--accent)',
        textTransform: 'uppercase', marginBottom: '1rem',
        display: 'flex', alignItems: 'center', gap: '1rem',
      }}>
        <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
        Beyond the Screen
      </div>

      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
        gap: 'clamp(2.5rem, 5vw, 4.5rem)',
        alignItems: 'center',
      }}>
        {/* Left — image */}
        <div className="rv" style={{
          position: 'relative', borderRadius: 16, overflow: 'hidden',
          border: '1px solid var(--border-bright)',
          aspectRatio: '4 / 5', maxHeight: 560,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BEYOND_DATA.image}
            alt="Yerbolat on the basketball court"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(6,6,8,0.55), transparent 50%)',
          }} />
          <div style={{
            position: 'absolute', bottom: 16, left: 18,
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
            letterSpacing: '0.1em', color: 'var(--fg)',
            background: 'rgba(6,6,8,0.5)', backdropFilter: 'blur(6px)',
            border: '1px solid var(--border)', borderRadius: 100,
            padding: '0.3rem 0.8rem',
          }}>
            🏀 Captain · on the floor
          </div>
        </div>

        {/* Right — content */}
        <div>
          <h2 className="rv" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
            letterSpacing: '-0.02em', color: 'var(--fg)',
            margin: '0 0 1.2rem', lineHeight: 0.95, whiteSpace: 'pre-line',
          }}>
            {BEYOND_DATA.headline}
          </h2>
          <p className="rv d1" style={{
            fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            color: 'var(--fg-muted)', lineHeight: 1.75, margin: '0 0 2rem', maxWidth: 440,
          }}>
            The same drive that ships products runs the court and the stage. I lead teams
            wherever I show up — not by title, but by setting the pace.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {BEYOND_DATA.items.map((item, i) => (
              <div
                key={item.title}
                className={`rv d${i + 1}`}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '1rem',
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 10, padding: '1.1rem 1.3rem',
                  transition: 'border-color 0.3s, transform 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.35)'; e.currentTarget.style.transform = 'translateX(4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateX(0)' }}
              >
                <span style={{ fontSize: '1.4rem', lineHeight: 1.2, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)', fontSize: '0.98rem', fontWeight: 700,
                    color: 'var(--fg)', margin: '0 0 0.25rem', letterSpacing: '-0.01em',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.84rem',
                    color: 'var(--fg-muted)', lineHeight: 1.6, margin: 0,
                  }}>
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .rv {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .rv.in { opacity: 1; transform: translateY(0); }
        .rv.d1 { transition-delay: 0.08s; }
        .rv.d2 { transition-delay: 0.16s; }
        .rv.d3 { transition-delay: 0.24s; }
        .rv.d4 { transition-delay: 0.32s; }
      `}</style>
    </section>
  )
}
