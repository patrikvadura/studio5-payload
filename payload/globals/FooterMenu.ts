import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const FooterMenu: GlobalConfig = {
  slug: 'footer-menu',
  label: 'Odkazy v zápatí',
  graphQL: {
    name: 'FooterMenu',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      labels: {
        singular: 'Odkaz',
        plural: 'Odkazy',
      },
      type: 'array',
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
