'use client'

import React, { useState } from 'react'
import { PayloadAdminBar, PayloadAdminBarProps, PayloadMeUser } from 'payload-admin-bar'

import { Gutter } from '../Gutter'

import classes from './index.module.scss'

const Title: React.FC = () => <span>Payload + Vercel</span>

export const AdminBar: React.FC<{
  adminBarProps: PayloadAdminBarProps
}> = props => {
  const { adminBarProps } = props

  const [user, setUser] = useState<PayloadMeUser>()

  return (
    <div className={`bg-gray-50 py-2 hidden w-full z-10 ${user && classes.show}`}>
      <div className="relative container">
        <PayloadAdminBar
          {...adminBarProps}
          cmsURL={process.env.NEXT_PUBLIC_APP_URL}
          onAuthChange={setUser}
          className="!text-secondary"
          classNames={{
            user: classes.user,
            logo: classes.logo,
            controls: classes.controls,
          }}
          logo={<Title />}
          style={{
            position: 'relative',
            zIndex: 'unset',
            padding: 0,
            backgroundColor: 'transparent',
          }}
        />
      </div>
    </div>
  )
}
