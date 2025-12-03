import type { Metadata } from 'next'
import './globals.css'
import NavigationModern from '@/components/NavigationModern'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import SnippetLoader from '@/components/SnippetLoader'
import CostCalculatorWrapper from '@/components/CostCalculatorWrapper'
import { Poppins, Plus_Jakarta_Sans } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'Fikz Studio - Digital Marketing Agency',
  description: 'Professional web design, SEO, and digital marketing services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const favicon = localStorage.getItem('siteFavicon');
                if (favicon) {
                  const link = document.createElement('link');
                  link.type = 'image/x-icon';
                  link.rel = 'shortcut icon';
                  link.href = favicon;
                  document.head.appendChild(link);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} ${plusJakarta.variable} font-sans`}>
        <SnippetLoader />
        <NavigationModern />
        {children}
        <WhatsAppFloat />
        <CostCalculatorWrapper />
      </body>
    </html>
  )
}
