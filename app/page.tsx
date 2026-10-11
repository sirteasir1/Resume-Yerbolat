import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Achievements } from '@/components/sections/Achievements'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Beyond } from '@/components/sections/Beyond'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="section-divider" aria-hidden="true" />
      <About />
      <div className="section-divider" aria-hidden="true" />
      <Projects />
      <div className="section-divider" aria-hidden="true" />
      <Achievements />
      <div className="section-divider" aria-hidden="true" />
      <Skills />
      <div className="section-divider" aria-hidden="true" />
      <Experience />
      <div className="section-divider" aria-hidden="true" />
      <Beyond />
      <div className="section-divider" aria-hidden="true" />
      <Contact />

      <footer
        role="contentinfo"
        style={{
          borderTop: '1px solid var(--border)',
          padding: '36px 56px',
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: 12,
            color: 'var(--dim)',
          }}
        >
          © 2026 Yerbolat Rgalbek. Built with intent from Almaty, Kazakhstan.
        </span>
        <span
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: 12,
            color: 'var(--dim)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#00ff88',
              animation: 'pulseDot 2s ease-in-out infinite',
            }}
            aria-hidden="true"
          />
          Available for work
        </span>
      </footer>
    </main>
  )
}
