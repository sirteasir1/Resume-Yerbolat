import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#060608',
        surface: '#0d0d11',
        'surface-2': '#141419',
        'surface-3': '#1c1c24',
        accent: '#00d4ff',
        'accent-2': '#7c3aed',
        'accent-warm': '#ff6b35',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        heading: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-manrope)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      animation: {
        'float-orb': 'floatOrb 13s ease-in-out infinite',
        'float-orb-2': 'floatOrb 17s ease-in-out infinite reverse',
        'float-orb-3': 'floatOrb 21s ease-in-out infinite 4s',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'scroll-line': 'scrollLine 2.2s ease-in-out infinite',
        'slide-up': 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s forwards',
      },
      keyframes: {
        floatOrb: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(28px, -18px)' },
          '66%': { transform: 'translate(-18px, 28px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        scrollLine: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        slideUp: {
          to: { transform: 'translateY(0)' },
        },
        fadeUp: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
