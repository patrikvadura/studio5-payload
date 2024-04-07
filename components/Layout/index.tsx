'use client'

import React from 'react'
import { ModalContainer, ModalProvider } from '@faceless-ui/modal'

import { FooterMenu, MainMenu } from '../../payload-types'
import { Footer } from '../Footer'
import { Header } from '../Header'

type Props = {
  mainMenu: MainMenu
  footerMenu: FooterMenu
  children: React.ReactNode
}

const Layout = ({ mainMenu, footerMenu, children }: Props): React.ReactElement => {
  return (
    <React.Fragment>
      <ModalProvider transTime={0} zIndex="var(--modal-z-index)">
        <Header mainMenu={mainMenu} />
        {children}
        <Footer footerMenu={footerMenu} />
        <ModalContainer />
      </ModalProvider>
    </React.Fragment>
  )
}

export default Layout
