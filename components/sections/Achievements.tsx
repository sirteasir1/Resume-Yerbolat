'use client'

import { useEffect, useRef } from 'react'
import { ACHIEVEMENTS_DATA } from '@/lib/data'
import { useTilt } from '@/components/ui/Interactive'

function AwardCard({ award }: { award: (typeof ACHIEVEMENTS_DATA)['awards'][number] }) {
  const tilt = useTilt(6)
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={{
        position: 'relative',
        borderRadius: 12,
        overflow: 'hidden',
        border: '1px solid var(--border)',
        background: 'var(--surface)',
        transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={award.image}
          alt={award.title}
          loading="lazy"
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            display: 'block', filter: 'saturate(1.05)',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(6,6,8,0.92) 0%, rgba(6,6,8,0.15) 55%, transparent 100%)',
        }} />
        <span style={{
          position: 'absolute', top: 12, left: 12,
          fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          background: 'rgba(0,212,255,0.14)', border: '1px solid rgba(0,212,255,0.3)',
          color: 'var(--accent)', borderRadius: 100, padding: '0.25rem 0.7rem',
          backdropFilter: 'blur(6px)',
        }}>
          {award.tag}
        </span>
      </div>
      <div style={{ padding: '1.2rem 1.3rem 1.4rem' }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)', fontSize: '1.02rem', fontWeight: 700,
          color: 'var(--fg)', margin: '0 0 0.4rem', letterSpacing: '-0.01em',
        }}>
          {award.title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '0.82rem',
          color: 'var(--fg-muted)', lineHeight: 1.6, margin: 0,
        }}>
          {award.detail}
        </p>
      </div>
    </div>
  )
}

export function Achievements() {
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
      id="achievements"
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute', top: '10%', right: '-10%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.06), transparent 70%)',
        filter: 'blur(90px)', pointerEvents: 'none',
      }} />

      {/* Section label */}
      <div className="rv" style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
        letterSpacing: '0.2em', color: 'var(--accent)',
        textTransform: 'uppercase', marginBottom: '1rem',
        display: 'flex', alignItems: 'center', gap: '1rem',
      }}>
        <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
        Milestones
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <h2 className="rv" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          letterSpacing: '-0.02em', color: 'var(--fg)',
          margin: '0 0 clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1,
        }}>
          The proof,<br />not the promise
        </h2>

        {/* nFactorial funnel */}
        <div className="rv" style={{
          background: 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(124,58,237,0.04))',
          border: '1px solid var(--border-bright)',
          borderRadius: 16,
          padding: 'clamp(1.8rem, 4vw, 2.8rem)',
          marginBottom: '1.5rem',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--fg-muted)', marginBottom: '1.8rem',
          }}>
            nFactorial Incubator · largest in Central Asia
          </div>

          <div style={{
            display: 'flex', alignItems: 'stretch', gap: '0.5rem',
            flexWrap: 'wrap',
          }}>
            {ACHIEVEMENTS_DATA.funnel.map((step, i) => (
              <div key={step.label} style={{
                flex: '1 1 160px', display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <div style={{
                  flex: 1,
                  background: i === 2 ? 'rgba(0,212,255,0.08)' : 'var(--surface)',
                  border: i === 2 ? '1px solid rgba(0,212,255,0.35)' : '1px solid var(--border)',
                  borderRadius: 12, padding: '1.4rem 1.2rem', textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                    letterSpacing: '-0.02em', lineHeight: 1,
                    color: i === 2 ? 'var(--accent)' : 'var(--fg)',
                    textShadow: i === 2 ? '0 0 40px rgba(0,212,255,0.4)' : 'none',
                  }}>
                    {step.value}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-heading)', fontSize: '0.9rem',
                    fontWeight: 600, color: 'var(--fg)', marginTop: '0.5rem',
                  }}>
                    {step.label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                    color: 'var(--fg-subtle)', letterSpacing: '0.05em', marginTop: '0.2rem',
                  }}>
                    {step.note}
                  </div>
                </div>
                {i < ACHIEVEMENTS_DATA.funnel.length - 1 && (
                  <span className="funnel-arrow" style={{
                    color: 'var(--accent)', fontSize: '1.3rem', flexShrink: 0,
                    fontFamily: 'var(--font-mono)',
                  }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Offers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '1.5rem', marginBottom: '1.5rem',
        }}>
          {ACHIEVEMENTS_DATA.offers.map((offer, i) => (
            <div
              key={offer.org}
              className={`rv d${i + 1}`}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 12, padding: '1.8rem',
                position: 'relative', overflow: 'hidden',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = offer.color; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: offer.color, opacity: 0.7,
              }} />
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem',
              }}>
                <span style={{ fontSize: '1.3rem' }}>💼</span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: offer.color,
                }}>
                  {offer.role} received
                </span>
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700,
                color: 'var(--fg)', margin: '0 0 0.5rem', letterSpacing: '-0.01em',
              }}>
                {offer.org}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.85rem',
                color: 'var(--fg-muted)', lineHeight: 1.65, margin: 0,
              }}>
                {offer.note}
              </p>
            </div>
          ))}
        </div>

        {/* Award gallery */}
        <div className="rv" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '1.5rem',
        }}>
          {ACHIEVEMENTS_DATA.awards.map(award => (
            <AwardCard key={award.title} award={award} />
          ))}
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
        .rv.d2 { transition-delay: 0.18s; }
        @media (max-width: 560px) {
          .funnel-arrow { transform: rotate(90deg); display: block; width: 100%; text-align: center; }
        }
      `}</style>
    </section>
  )
}
