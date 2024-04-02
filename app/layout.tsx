import React from 'react'
import { Poppins } from 'next/font/google'
import Script from 'next/script'

import Footer from '../components/Footer'
import { Providers } from './providers'

const defaultFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

import './main.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmID: string | undefined = 'ID'

  return (
    <html suppressHydrationWarning>
      <Script
        id="Google Analytics"
        data-category="analytics"
        data-service="Google Analytics"
        dangerouslySetInnerHTML={{
          __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmID}');
            `,
        }}
        strategy="lazyOnload"
      />

      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={`${defaultFont.className}`} suppressHydrationWarning>
        <Providers>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  )
}
