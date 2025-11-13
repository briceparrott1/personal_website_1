import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/ui/navigation'
import CursorTracker from '@/components/interactive/cursor-tracker'
import PageTransition from '@/components/interactive/page-transition'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brice Parrott - Software Engineer',
  description: 'Computer Science student passionate about creating efficient solutions to complex problems. Experience at Shift5 and Lockheed Martin.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <Navigation />
        <CursorTracker />
        <main className="pt-16">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
      </body>
    </html>
  )
}