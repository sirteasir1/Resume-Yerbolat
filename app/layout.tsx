import type { Metadata } from 'next'
import './globals.css'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { LoadingScreen } from '@/components/ui/LoadingScreen'
import { Navbar } from '@/components/ui/Navbar'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

export const metadata: Metadata = {
  title: 'Yerbolat Rgalbek — Builder & AI Engineer',
  description: '16-year-old AI engineer and founder from Almaty, Kazakhstan. Building EdTech products used by 1000+ students across Eurasia. Founder of Admitly & Oqu.',
  keywords: ['AI Engineer', 'EdTech', 'Kazakhstan', 'Next.js', 'Python', 'Machine Learning', 'Admitly', 'Oqu'],
  authors: [{ name: 'Yerbolat Rgalbek' }],
  openGraph: {
    title: 'Yerbolat Rgalbek — Builder & AI Engineer',
    description: '16 y/o building AI-native products that impact thousands across Eurasia.',
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
