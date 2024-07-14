import { ThemeProvider } from '@/src/app/[locale]/components/ThemeProvider'
import type { Metadata } from 'next'
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages
} from 'next-intl'
import { Work_Sans } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { Header } from './components/Header'
import './globals.css'
import { Footer } from './components/Footer'

const work_sans = Work_Sans({
  subsets: ['latin'],
  weight: "500",
  variable: '--work_sans'
})
export const metadata: Metadata = {
  title: 'La Capital Research Center',
  description: 'create next app By Yahya Parvar!'
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()
  return (
    <html
      lang={locale}
      dir="ltr"
      className={`${work_sans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className='bg-white'>
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='light'
          themes={[
            'light',
            'dark',
            'instagram',
            'facebook',
            'discord',
            'netflix',
            'twilight',
            'reddit'
          ]}
        >
          <NextIntlClientProvider
            locale={locale}
            messages={messages as AbstractIntlMessages}
          >
            <NextTopLoader
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              easing='ease'
              speed={200}
              shadow='0 0 10px #2299DD,0 0 5px #2299DD'
              color=''
              showSpinner={false}
            />
              <Header locale={locale} />
              <main className='mx-auto max-w-screen-2xl'>
                {children}
              </main>
              <Footer/>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
