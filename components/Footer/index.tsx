import React from 'react'

import { FooterMenu } from '../../payload-types'
import CookieConsentComponent from '../CookieConsent'
import { CMSLink } from '../Link'
import { LogoFooter } from '../Logo/Footer'
import FooterContact from './FooterContact'
import FooterSocial from './FooterSocial'

export const Footer: React.FC<{ footerMenu: FooterMenu }> = ({ footerMenu }) => {
  const navItems = footerMenu?.navItems || []

  return (
    <footer className="!bg-secondary">
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pt-16">
        <div className="md:col-span-5 flex flex-col space-y-8">
          <p className="mt-4 text-white opacity-75">
            Jsme kreativní reklamní agentura z Uherského Hradiště. Jsme připraveni pomoci vám a vaší
            firmě vizuálně růst.
          </p>

          <a
            href={`mailto:s5@s5.cz`}
            className="text-6xl font-black text-white hover:text-primary animate-fade-up animate-once animate-ease-in"
          >
            s5@s5.cz
          </a>
        </div>

        <FooterContact />
      </div>

      <div className="container">
        <div className="flex flex-row items-center justify-between mt-12 py-8 text-base text-center opacity-50">
          <LogoFooter />

          <div className="flex flex-row items-center justify-center space-x-4 text-center text-base normal-case">
            {navItems.map(({ link }, i) => {
              return <CMSLink key={i} {...link} className="text-white hover:underline" />
            })}

            <CookieConsentComponent />
          </div>

          <FooterSocial />
        </div>
      </div>
    </footer>
  )
}
