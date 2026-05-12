'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -100, y: -100 })
  const outerPos = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches
    if (isTouchDevice) return

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const onEnter = () => {
      document.body.classList.add('ch')
    }

    const onLeave = () => {
      document.body.classList.remove('ch')
    }

    const loop = () => {
      outerPos.current.x += (pos.current.x - outerPos.current.x) * 0.12
      outerPos.current.y += (pos.current.y - outerPos.current.y) * 0.12

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outerPos.current.x - 21}px, ${outerPos.current.y - 21}px)`
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${pos.current.x - 3}px, ${pos.current.y - 3}px)`
      }
      rafRef.current = requestAnimationFrame(loop)
    }

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    window.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(loop)
    addHoverListeners()

    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={outerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 42,
          height: 42,
          borderRadius: '50%',
          border: '1.5px solid rgba(0, 212, 255, 0.6)',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.2s, height 0.2s, border-color 0.2s, margin 0.2s',
          mixBlendMode: 'normal',
        }}
        className="cursor-outer"
      />
      <div
        ref={innerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'var(--accent)',
          pointerEvents: 'none',
          zIndex: 99999,
        }}
      />
      <style>{`
        body * { cursor: none !important; }
        body.ch .cursor-outer {
          width: 66px;
          height: 66px;
          border-color: rgba(124, 58, 237, 0.5);
          margin: -12px;
        }
      `}</style>
    </>
  )
}
