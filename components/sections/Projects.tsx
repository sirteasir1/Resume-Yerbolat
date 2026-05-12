'use client'

import { useEffect, useRef } from 'react'
import { PROJECTS_DATA } from '@/lib/data'

export function Projects() {
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
      id="projects"
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem)',
        position: 'relative',
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
        Selected Work
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="rv" style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            letterSpacing: '-0.02em', color: 'var(--fg)',
            margin: 0, lineHeight: 1,
          }}>
            Projects that<br />shipped & scaled
          </h2>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
            color: 'var(--fg-muted)', letterSpacing: '0.06em',
          }}>
            {PROJECTS_DATA.length} case studies
          </span>
        </div>

        {/* Project list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {PROJECTS_DATA.map((project, i) => (
            <a
              key={project.id}
              href={project.href}
              className={`rv d${i + 1} project-card`}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                alignItems: 'center',
                gap: '2rem',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Background gradient preview */}
              <div style={{
                position: 'absolute', inset: 0,
                background: project.gradient,
                opacity: 0, transition: 'opacity 0.4s',
              }}
                className="card-bg"
              />

              {/* Left content */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '1.5rem',
                  marginBottom: '1rem', flexWrap: 'wrap',
                }}>
                  {/* Number */}
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                    letterSpacing: '0.12em', color: 'var(--fg-subtle)',
                  }}>
                    {project.number}
                  </span>
                  {/* Title */}
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                    fontWeight: 700, color: 'var(--fg)',
                    margin: 0, letterSpacing: '-0.01em',
                  }}>
                    {project.title}
                  </h3>
                </div>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.875rem, 1.4vw, 0.95rem)',
                  color: 'var(--fg-muted)', lineHeight: 1.7,
                  margin: '0 0 1.2rem', maxWidth: 600,
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                      letterSpacing: '0.06em',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid var(--border)',
                      borderRadius: 3, padding: '0.25rem 0.6rem',
                      color: 'var(--fg-muted)',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — large letters */}
              <div style={{
                position: 'relative', zIndex: 1,
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 6vw, 6rem)',
                letterSpacing: '-0.04em',
                color: project.letterColor,
                lineHeight: 1,
                userSelect: 'none',
                flexShrink: 0,
              }}>
                {project.letters}
              </div>

              {/* Arrow */}
              <div style={{
                position: 'absolute', top: '1.5rem', right: '1.5rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
                color: 'var(--fg-muted)',
                transition: 'transform 0.2s, color 0.2s',
              }}
                className="card-arrow"
              >
                ↗
              </div>

              <style>{`
                .project-card:hover .card-bg { opacity: 1 !important; }
                .project-card:hover .card-arrow {
                  transform: translate(2px, -2px);
                  color: var(--fg);
                }
              `}</style>
            </a>
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
        .rv.d2 { transition-delay: 0.15s; }
        .rv.d3 { transition-delay: 0.25s; }
        .rv.d4 { transition-delay: 0.35s; }
        .rv.d5 { transition-delay: 0.45s; }
      `}</style>
    </section>
  )
}
