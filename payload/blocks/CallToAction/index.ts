import type { Block } from 'payload/types'

import { backgroundColor } from '../../fields/backgroundColor'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'

export const CallToAction: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  imageURL:
    'https://res.cloudinary.com/patrik-vadura/image/upload/v1710625573/Payload/Blocks/block_cta_tpvntg.webp',
  fields: [
    backgroundColor({ overrides: { name: 'ctaBackgroundColor' } }),
    richText(),
    linkGroup({
      appearances: ['primary', 'secondary'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
