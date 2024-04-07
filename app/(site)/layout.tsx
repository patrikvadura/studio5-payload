import React from 'react'

import Layout from '../../components/Layout'
import { getPayloadClient } from '../../payload/payloadClient'

import '../main.css'

const SiteLayout = async ({ children }: { children: React.ReactNode }) => {
  const payload = await getPayloadClient()

  const mainMenu = await payload.findGlobal({
    slug: 'main-menu',
  })

  const footerMenu = await payload.findGlobal({
    slug: 'footer-menu',
  })

  return (
    <Layout mainMenu={mainMenu} footerMenu={footerMenu}>
      {children}
    </Layout>
  )
}

export default SiteLayout
