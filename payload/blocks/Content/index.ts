import type { Block, Field } from 'payload/types'

import { backgroundColor } from '../../fields/backgroundColor'
import link from '../../fields/link'
import richText from '../../fields/richText'

const columnFields: Field[] = [
  richText(),
  {
    name: 'enableLink',
    type: 'checkbox',
  },
  link({
    overrides: {
      admin: {
        condition: (_: any, { enableLink }: { enableLink: boolean }) => Boolean(enableLink),
      },
    },
  }),
]

export const Content: Block = {
  slug: 'content',
  imageURL:
    'https://res.cloudinary.com/patrik-vadura/image/upload/v1710625569/Payload/Blocks/block_content_kjylzr.webp',
  fields: [
    {
      type: 'row',
      fields: [
        backgroundColor({ overrides: { name: 'contentBackgroundColor' } }),
        {
          name: 'layout',
          type: 'select',
          defaultValue: 'oneColumn',
          options: [
            {
              label: 'One Column',
              value: 'oneColumn',
            },
            {
              label: 'Two Thirds + One Third',
              value: 'twoThirdsOneThird',
            },
            {
              label: 'Half + Half',
              value: 'halfAndHalf',
            },
            {
              label: 'Three Columns',
              value: 'threeColumns',
            },
          ],
        },
      ],
    },
    {
      name: 'columnOne',
      type: 'group',
      fields: columnFields,
    },
    {
      name: 'columnTwo',
      type: 'group',
      fields: columnFields,
      admin: {
        condition: (_, { layout }) =>
          ['twoThirdsOneThird', 'halfAndHalf', 'threeColumns'].includes(layout),
      },
    },
    {
      name: 'columnThree',
      type: 'group',
      fields: columnFields,
      admin: {
        condition: (_, { layout }) => layout === 'threeColumns',
      },
    },
  ],
}
