'use client'

import { useEffect, useRef, useState } from 'react'
import { SITE_CONFIG } from '@/lib/data'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: SITE_CONFIG.github, icon: '⌥' },
  { label: 'Twitter', href: SITE_CONFIG.twitter, icon: '𝕏' },
  { label: 'LinkedIn', href: SITE_CONFIG.linkedin, icon: 'in' },
]

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    sectionRef.current?.querySelectorAll('.rv').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Simulate async send
    await new Promise(r => setTimeout(r, 1400))
    setSending(false)
    setSent(true)
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--border)',
    borderRadius: 6,
    padding: '0.85rem 1rem',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: 'var(--fg)',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box' as const,
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background orbs */}
      <div style={{
        position: 'absolute', bottom: '-10%', left: '50%',
        transform: 'translateX(-50%)',
        width: 700, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,212,255,0.06), transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      {/* Section label */}
      <div className="rv" style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
        letterSpacing: '0.2em', color: 'var(--accent)',
        textTransform: 'uppercase', marginBottom: '1rem',
        display: 'flex', alignItems: 'center', gap: '1rem',
      }}>
        <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
        Contact
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'start',
        }}>
          {/* Left — CTA text */}
          <div>
            <h2 className="rv" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              letterSpacing: '-0.02em', color: 'var(--fg)',
              margin: '0 0 1.5rem', lineHeight: 1,
            }}>
              Let&apos;s build<br />
              <span style={{ color: 'var(--accent)' }}>something</span><br />
              exceptional.
            </h2>

            <p className="rv d2" style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
              color: 'var(--fg-muted)', lineHeight: 1.75,
              margin: '0 0 2.5rem', maxWidth: 380,
            }}>
              Whether you have a bold idea, a scaling challenge, or just want to talk craft —
              my inbox is always open.
            </p>

            {/* Direct email */}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="rv d3"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.8rem',
                fontFamily: 'var(--font-mono)', fontSize: '1rem',
                letterSpacing: '0.04em', color: 'var(--fg)',
                textDecoration: 'none', marginBottom: '2.5rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg)')}
            >
              <span style={{
                width: 36, height: 36, borderRadius: 6,
                background: 'var(--surface)', border: '1px solid var(--border)',
                display: 'grid', placeItems: 'center', fontSize: '0.85rem',
              }}>@</span>
              {SITE_CONFIG.email}
            </a>

            {/* Social links */}
            <div className="rv d4" style={{ display: 'flex', gap: '0.8rem' }}>
              {SOCIAL_LINKS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    width: 42, height: 42,
                    display: 'grid', placeItems: 'center',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 6,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem', color: 'var(--fg-muted)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'
                    e.currentTarget.style.color = 'var(--accent)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--fg-muted)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="rv d2">
            {sent ? (
              <div style={{
                background: 'rgba(0,212,255,0.06)',
                border: '1px solid rgba(0,212,255,0.2)',
                borderRadius: 10, padding: '3rem',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)', fontSize: '1.2rem',
                  fontWeight: 700, color: 'var(--fg)', margin: '0 0 0.5rem',
                }}>
                  Message sent
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                  color: 'var(--fg-muted)', margin: 0,
                }}>
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 10, padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                  display: 'flex', flexDirection: 'column', gap: '1.2rem',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                      letterSpacing: '0.1em', color: 'var(--fg-muted)',
                      textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem',
                    }}>
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formState.name}
                      onChange={e => setFormState(p => ({ ...p, name: e.target.value }))}
                      style={inputStyle}
                      onFocus={e => {
                        e.target.style.borderColor = 'rgba(0,212,255,0.4)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.06)'
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = 'var(--border)'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                      letterSpacing: '0.1em', color: 'var(--fg-muted)',
                      textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem',
                    }}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formState.email}
                      onChange={e => setFormState(p => ({ ...p, email: e.target.value }))}
                      style={inputStyle}
                      onFocus={e => {
                        e.target.style.borderColor = 'rgba(0,212,255,0.4)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.06)'
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = 'var(--border)'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                    letterSpacing: '0.1em', color: 'var(--fg-muted)',
                    textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem',
                  }}>
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="What are you building?"
                    value={formState.message}
                    onChange={e => setFormState(p => ({ ...p, message: e.target.value }))}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 130 }}
                    onFocus={e => {
                      e.target.style.borderColor = 'rgba(0,212,255,0.4)'
                      e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.06)'
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'var(--border)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
                    letterSpacing: '0.08em', fontWeight: 700,
                    background: sending ? 'rgba(0,212,255,0.3)' : 'var(--accent)',
                    color: '#000',
                    border: 'none', borderRadius: 6,
                    padding: '0.9rem 1.5rem',
                    cursor: sending ? 'not-allowed' : 'none',
                    transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: '0.6rem',
                  }}
                  onMouseEnter={e => {
                    if (!sending) {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,212,255,0.35)'
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {sending ? (
                    <>
                      <span style={{
                        width: 14, height: 14, border: '2px solid rgba(0,0,0,0.3)',
                        borderTopColor: '#000', borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite',
                      }} />
                      Sending...
                    </>
                  ) : (
                    'Send Message →'
                  )}
                </button>
              </form>
            )}
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
        .rv.d2 { transition-delay: 0.1s; }
        .rv.d3 { transition-delay: 0.2s; }
        .rv.d4 { transition-delay: 0.3s; }
        input::placeholder, textarea::placeholder { color: var(--fg-subtle); }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  )
}
