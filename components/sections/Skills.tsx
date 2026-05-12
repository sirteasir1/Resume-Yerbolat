'use client'

import { useEffect, useRef } from 'react'
import { SKILLS_DATA } from '@/lib/data'

export function Skills() {
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
      id="skills"
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem)',
        position: 'relative',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute', top: '50%', right: '-15%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.06), transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
        transform: 'translateY(-50%)',
      }} />

      {/* Section label */}
      <div className="rv" style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
        letterSpacing: '0.2em', color: 'var(--accent)',
        textTransform: 'uppercase', marginBottom: '1rem',
        display: 'flex', alignItems: 'center', gap: '1rem',
      }}>
        <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
        Skills
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 className="rv" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          letterSpacing: '-0.02em', color: 'var(--fg)',
          margin: '0 0 clamp(2.5rem, 5vw, 4rem)', lineHeight: 1,
        }}>
          The full stack,<br />end to end
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '1.5rem',
        }}>
          {SKILLS_DATA.map((group, i) => (
            <div
              key={group.category}
              className={`rv d${i + 1}`}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: '1.8rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = group.color.replace('var(', '').replace(')', '')
                  ? group.color : 'rgba(255,255,255,0.12)'
                e.currentTarget.style.borderColor = group.color
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: group.color, opacity: 0.6,
              }} />

              {/* Category label */}
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: group.color, marginBottom: '1.2rem',
              }}>
                {group.category}
              </div>

              {/* Skills list */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {group.skills.map(skill => (
                  <li key={skill} style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9rem', fontWeight: 500,
                    color: 'var(--fg-muted)',
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-muted)')}
                  >
                    <span style={{
                      width: 4, height: 4, borderRadius: '50%',
                      background: group.color, flexShrink: 0,
                    }} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
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
        .rv.d1 { transition-delay: 0.05s; }
        .rv.d2 { transition-delay: 0.12s; }
        .rv.d3 { transition-delay: 0.19s; }
        .rv.d4 { transition-delay: 0.26s; }
        .rv.d5 { transition-delay: 0.33s; }
      `}</style>
    </section>
  )
}
