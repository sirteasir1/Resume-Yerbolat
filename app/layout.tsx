import type { Metadata } from 'next'
import './globals.css'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { LoadingScreen } from '@/components/ui/LoadingScreen'
import { Navbar } from '@/components/ui/Navbar'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

export const metadata: Metadata = {
  title: 'Yerbolat Rgalbek — Builder & AI Engineer',
  description: '16-year-old AI engineer and founder from Almaty, Kazakhstan. nFactorial Incubator Top 20 Demo Day (of 3000+), 2× offer holder, founder of WearIt & Admitly. Building AI products used by 1000+.',
  keywords: ['AI Engineer', 'Founder', 'nFactorial', 'WearIt', 'AgroVoice', 'Kazakhstan', 'Next.js', 'Python', 'Machine Learning', 'Admitly'],
  authors: [{ name: 'Yerbolat Rgalbek' }],
  openGraph: {
    title: 'Yerbolat Rgalbek — Builder & AI Engineer',
    description: '16 y/o founder · nFactorial Top 20 Demo Day · 2× offer holder · building AI products out of Central Asia.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yerbolat Rgalbek — Builder & AI Engineer',
    creator: '@yerbolat',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
