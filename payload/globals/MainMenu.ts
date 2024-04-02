import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const MainMenu: GlobalConfig = {
  slug: 'main-menu',
  label: 'Navigace',
  graphQL: {
    name: 'MainMenu',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      labels: {
        singular: 'Položka menu',
        plural: 'Položky menu',
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
