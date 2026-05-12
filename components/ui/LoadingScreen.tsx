'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { easeInOut } from '@/lib/utils'

export function LoadingScreen() {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(true)
  const startRef = useRef<number>(0)
  const DURATION = 2400

  useEffect(() => {
    document.body.classList.add('loading')
    startRef.current = Date.now()

    const tick = () => {
      const elapsed = Date.now() - startRef.current
      const progress = Math.min(elapsed / DURATION, 1)
      const value = Math.round(easeInOut(progress) * 100)

      setCount(value)

      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setVisible(false)
          document.body.classList.remove('loading')
        }, 150)
      }
    }

    requestAnimationFrame(tick)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'var(--bg)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(100px, 20vw, 200px)',
                color: 'var(--text)',
                lineHeight: 1,
                letterSpacing: '-4px',
              }}
            >
              {count}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-dm-mono)',
                fontSize: 11,
                letterSpacing: '0.45em',
                color: 'var(--dim)',
                textTransform: 'uppercase',
                marginTop: 10,
              }}
            >
              Crafting experience
            </div>
          </div>

          {/* Progress track */}
          <div
            style={{
              position: 'absolute',
              bottom: 48,
              left: '5%',
              right: '5%',
              height: 1,
              background: 'var(--border)',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${count}%`,
                background: 'var(--accent)',
                boxShadow: '0 0 10px var(--accent)',
                transition: 'width 0.06s linear',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
