import React from 'react'
import { Modal } from '@faceless-ui/modal'

import { MainMenu } from '../../payload-types'
import { CMSLink } from '../Link'
// eslint-disable-next-line import/no-cycle
import { HeaderBar } from './index'

import classes from './index.module.scss'

type Props = {
  navItems: MainMenu['navItems']
}

export const slug = 'menu-modal'

export const MobileMenuModal: React.FC<Props> = ({ navItems }) => {
  return (
    <Modal slug={slug} className={classes.mobileMenuModal}>
      <HeaderBar />

      <div className={classes.mobileMenuItems}>
        {navItems!.map(({ link }, i) => {
          return <CMSLink className={classes.menuItem} key={i} {...link} />
        })}
      </div>
    </Modal>
  )
}
