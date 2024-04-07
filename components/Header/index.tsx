import React, { useEffect, useState } from 'react'
import { ModalToggler, useModal } from '@faceless-ui/modal'
import { Icon } from '@iconify/react'
import Link from 'next/link'

import { MainMenu } from '../../payload-types'
import { CMSLink } from '../Link'
import { Logo } from '../Logo'
import { MobileMenuModal, slug as menuModalSlug } from './MobileMenuModal'

import classes from './index.module.scss'

type HeaderBarProps = {
  children?: React.ReactNode
}
export const HeaderBar: React.FC<HeaderBarProps> = ({ children }) => {
  const { isModalOpen } = useModal()

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${classes.header} ${isScrolled ? 'fixed' : ''}`}>
      <div className="container flex flex-row justify-between">
        <Link href="/">
          <Logo className="w-[120px]" />
        </Link>

        {children}

        <ModalToggler slug={menuModalSlug} className={classes.mobileMenuToggle}>
          <Icon
            icon={isModalOpen(menuModalSlug) ? 'mdi-light:plus' : 'mdi-light:menu'}
            className="text-[28px]"
          />
        </ModalToggler>
      </div>
    </header>
  )
}

export const Header: React.FC<{ mainMenu: MainMenu }> = ({ mainMenu }) => {
  const navItems = mainMenu?.navItems || []

  return (
    <>
      <HeaderBar>
        <nav className={classes.nav}>
          {navItems.map(({ link }, i) => {
            return <CMSLink key={i} {...link} />
          })}
        </nav>
      </HeaderBar>

      <MobileMenuModal navItems={navItems} />
    </>
  )
}
