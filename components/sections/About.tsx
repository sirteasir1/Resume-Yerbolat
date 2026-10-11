'use client'

import { useEffect, useRef } from 'react'
import { ABOUT_DATA } from '@/lib/data'

export function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    sectionRef.current?.querySelectorAll('.rv').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
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
        textTransform: 'uppercase', marginBottom: '3rem',
        display: 'flex', alignItems: 'center', gap: '1rem',
      }}>
        <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
        About
      </div>

      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
        gap: 'clamp(3rem, 6vw, 6rem)',
        alignItems: 'start',
      }}>
        {/* Left — headline */}
        <div>
          <h2 className="rv" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            color: 'var(--fg)',
            margin: '0 0 3rem',
            whiteSpace: 'pre-line',
          }}>
            {ABOUT_DATA.headline}
          </h2>

          {/* Cards grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
          }}>
            {ABOUT_DATA.cards.map((card, i) => (
              <div
                key={card.label}
                className={`rv d${i + 1}`}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  padding: '1.5rem',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = card.color || 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  color: card.color || 'var(--accent)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  marginBottom: '0.4rem',
                }}>
                  {card.number}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                  color: 'var(--fg-muted)', letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  {card.label}
                </div>
              </div>
            ))}
          </div>

          {/* Portrait / building shot */}
          <div className="rv d4" style={{
            marginTop: '1rem', position: 'relative',
            borderRadius: 12, overflow: 'hidden',
            border: '1px solid var(--border-bright)',
            aspectRatio: '16 / 10',
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ABOUT_DATA.portrait}
              alt="Yerbolat building late at night"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(6,6,8,0.6), transparent 55%)',
            }} />
            <div style={{
              position: 'absolute', bottom: 14, left: 16,
              fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
              letterSpacing: '0.08em', color: 'var(--fg-muted)',
            }}>
              <span style={{ color: 'var(--accent)' }}>$</span> shipping, 2am
            </div>
          </div>
        </div>

        {/* Right — paragraphs + status */}
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {ABOUT_DATA.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`rv d${i + 1}`}
                dangerouslySetInnerHTML={{ __html: p }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1rem, 1.6vw, 1.1rem)',
                  color: 'var(--fg-muted)',
                  lineHeight: 1.8,
                  margin: 0,
                }}
              />
            ))}
          </div>

          {/* Status card */}
          <div className="rv d4" style={{
            background: 'rgba(0,212,255,0.04)',
            border: '1px solid rgba(0,212,255,0.15)',
            borderRadius: 8, padding: '1.5rem',
            display: 'flex', gap: '1rem', alignItems: 'flex-start',
          }}>
            <span style={{ fontSize: '1.4rem' }}>{ABOUT_DATA.status.icon}</span>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)', fontSize: '0.95rem',
                fontWeight: 600, color: 'var(--fg)', marginBottom: '0.3rem',
              }}>
                {ABOUT_DATA.status.title}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                color: 'var(--accent)', letterSpacing: '0.06em',
              }}>
                {ABOUT_DATA.status.label}
              </div>
            </div>
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
        .rv.d1 { transition-delay: 0.05s; }
        .rv.d2 { transition-delay: 0.15s; }
        .rv.d3 { transition-delay: 0.25s; }
        .rv.d4 { transition-delay: 0.35s; }
        .rv.d5 { transition-delay: 0.45s; }
        strong { color: var(--fg); font-weight: 600; }
      `}</style>
    </section>
  )
}
