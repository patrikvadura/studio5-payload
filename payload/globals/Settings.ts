import type { GlobalConfig } from 'payload/types'

export const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Nastavení',
  graphQL: {
    name: 'Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'projectsPage',
      type: 'relationship',
      relationTo: 'pages',
      label: 'Stránka projektů',
    },
  ],
}
