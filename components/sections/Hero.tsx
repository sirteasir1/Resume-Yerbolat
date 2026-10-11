'use client'

import { useEffect, useRef } from 'react'
import { HERO_DATA, SITE_CONFIG } from '@/lib/data'
import { CountUp, Magnetic } from '@/components/ui/Interactive'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)
  const orb3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Orb parallax on scroll
    const onScroll = () => {
      const y = window.scrollY
      if (orb1Ref.current) orb1Ref.current.style.transform = `translateY(${y * 0.12}px)`
      if (orb2Ref.current) orb2Ref.current.style.transform = `translateY(${y * 0.19}px)`
      if (orb3Ref.current) orb3Ref.current.style.transform = `translateY(${y * 0.26}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Mouse parallax
    const onMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return
      const { innerWidth, innerHeight } = window
      const dx = (e.clientX - innerWidth / 2) / innerWidth
      const dy = (e.clientY - innerHeight / 2) / innerHeight
      if (orb1Ref.current) {
        orb1Ref.current.style.marginLeft = `${dx * 30}px`
        orb1Ref.current.style.marginTop = `${dy * 30}px`
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.marginLeft = `${dx * -20}px`
        orb2Ref.current.style.marginTop = `${dy * -20}px`
      }
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(6rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem) clamp(4rem, 6vw, 6rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)',
      }} />

      {/* Orbs */}
      <div ref={orb1Ref} style={{
        position: 'absolute', top: '20%', left: '60%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.15), transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
        transition: 'margin 0.3s ease-out',
      }} />
      <div ref={orb2Ref} style={{
        position: 'absolute', top: '50%', left: '-10%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%)',
        filter: 'blur(100px)', pointerEvents: 'none',
        transition: 'margin 0.3s ease-out',
      }} />
      <div ref={orb3Ref} style={{
        position: 'absolute', bottom: '-10%', right: '-5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,53,0.1), transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', width: '100%' }}>

        {/* Available badge */}
        <div className="hero-reveal d1" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
          background: 'rgba(0,212,255,0.07)', border: '1px solid rgba(0,212,255,0.2)',
          borderRadius: 100, padding: '0.4rem 1rem',
          marginBottom: '2.5rem',
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: '50%',
            background: '#00ff88',
            boxShadow: '0 0 8px #00ff88',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
            letterSpacing: '0.08em', color: 'var(--accent)',
          }}>
            {HERO_DATA.availableText}
          </span>
        </div>

        {/* Name */}
        <h1 style={{ margin: '0 0 1.5rem', lineHeight: 0.9, overflow: 'hidden' }}>
          {HERO_DATA.name.map((word, i) => (
            <div
              key={word}
              className={`hero-reveal d${i + 2}`}
              style={{
                display: 'block',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(5rem, 14vw, 13rem)',
                letterSpacing: '-0.02em',
                color: i === 0 ? 'var(--fg)' : 'transparent',
                WebkitTextStroke: i === 1 ? '1px rgba(255,255,255,0.25)' : undefined,
                lineHeight: 1,
              }}
            >
              {word}
            </div>
          ))}
        </h1>

        {/* Tagline + CTA row */}
        <div className="hero-reveal d4" style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem',
          marginBottom: '4rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            color: 'var(--fg-muted)', lineHeight: 1.7,
            maxWidth: 460, margin: 0,
            whiteSpace: 'pre-line',
          }}>
            {HERO_DATA.tagline}
          </p>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Magnetic strength={0.4}>
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
                  letterSpacing: '0.08em', textDecoration: 'none',
                  background: 'var(--accent)', color: '#000',
                  padding: '0.8rem 1.8rem', borderRadius: 4,
                  fontWeight: 700, transition: 'box-shadow 0.25s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 8px 34px rgba(0,212,255,0.45)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                View Work ↗
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
                  letterSpacing: '0.06em', textDecoration: 'none',
                  color: 'var(--fg)', border: '1px solid var(--border)',
                  padding: '0.8rem 1.8rem', borderRadius: 4,
                  transition: 'border-color 0.2s, color 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,212,255,0.5)'
                  e.currentTarget.style.color = 'var(--accent)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--fg)'
                }}
              >
                GitHub
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-reveal d5 hero-stats" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: 'clamp(1.5rem, 4vw, 3.5rem)',
          borderTop: '1px solid var(--border)', paddingTop: '2rem',
        }}>
          {HERO_DATA.stats.map(stat => (
            <div key={stat.label}>
              <CountUp
                end={stat.number}
                prefix={stat.prefix}
                suffix={stat.suffix}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: 'var(--fg)', letterSpacing: '-0.02em',
                  lineHeight: 1, display: 'inline-block',
                }}
              />
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                color: 'var(--fg-muted)', letterSpacing: '0.06em',
                marginTop: '0.4rem', textTransform: 'uppercase',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-reveal {
          opacity: 0;
          transform: translateY(30px);
          animation: heroIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.25s; }
        .d3 { animation-delay: 0.4s; }
        .d4 { animation-delay: 0.6s; }
        .d5 { animation-delay: 0.8s; }
        @keyframes heroIn {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }
      `}</style>
    </section>
  )
}
