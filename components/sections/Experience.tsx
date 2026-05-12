'use client'

import { useEffect, useRef } from 'react'
import { EXPERIENCE_DATA } from '@/lib/data'

export function Experience() {
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
      id="experience"
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem)',
        position: 'relative',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute', top: '30%', left: '-10%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.05), transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      {/* Section label */}
      <div className="rv" style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
        letterSpacing: '0.2em', color: 'var(--accent)',
        textTransform: 'uppercase', marginBottom: '1rem',
        display: 'flex', alignItems: 'center', gap: '1rem',
      }}>
        <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
        Experience
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 className="rv" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          letterSpacing: '-0.02em', color: 'var(--fg)',
          margin: '0 0 clamp(3rem, 6vw, 5rem)', lineHeight: 1,
        }}>
          Where I&apos;ve been,<br />what I&apos;ve built
        </h2>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 0, top: 8, bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, var(--accent), rgba(0,212,255,0.05))',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', paddingLeft: '2.5rem' }}>
            {EXPERIENCE_DATA.map((exp, i) => (
              <div
                key={i}
                className={`rv d${i + 1}`}
                style={{ position: 'relative' }}
              >
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute', left: -42, top: 6,
                  width: 10, height: 10, borderRadius: '50%',
                  background: exp.accentColor,
                  boxShadow: `0 0 12px ${exp.glowColor}`,
                  border: '2px solid var(--bg)',
                  zIndex: 1,
                }} />

                <div
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 10,
                    padding: 'clamp(1.5rem, 3vw, 2.2rem)',
                    transition: 'border-color 0.3s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = exp.accentColor)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  {/* Header */}
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'flex-start', flexWrap: 'wrap',
                    gap: '0.8rem', marginBottom: '0.8rem',
                  }}>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                        fontWeight: 700, color: 'var(--fg)',
                        margin: '0 0 0.25rem', letterSpacing: '-0.01em',
                      }}>
                        {exp.title}
                      </h3>
                      <div style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
                        color: exp.accentColor, letterSpacing: '0.05em',
                      }}>
                        {exp.company}
                        {exp.location && (
                          <span style={{ color: 'var(--fg-subtle)', marginLeft: '0.6rem' }}>
                            · {exp.location}
                          </span>
                        )}
                      </div>
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                      letterSpacing: '0.08em', color: 'var(--fg-subtle)',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--border)',
                      borderRadius: 4, padding: '0.3rem 0.7rem',
                      whiteSpace: 'nowrap',
                    }}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(0.875rem, 1.4vw, 0.95rem)',
                    color: 'var(--fg-muted)', lineHeight: 1.75,
                    margin: '0 0 1rem',
                  }}>
                    {exp.description}
                  </p>

                  {/* Badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.badges.map(badge => (
                      <span key={badge} style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                        letterSpacing: '0.05em',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--border)',
                        borderRadius: 3, padding: '0.2rem 0.55rem',
                        color: 'var(--fg-muted)',
                      }}>
                        {badge}
                      </span>
                    ))}
                  </div>
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
        .rv.d1 { transition-delay: 0.05s; }
        .rv.d2 { transition-delay: 0.15s; }
        .rv.d3 { transition-delay: 0.25s; }
        .rv.d4 { transition-delay: 0.35s; }
      `}</style>
    </section>
  )
}
