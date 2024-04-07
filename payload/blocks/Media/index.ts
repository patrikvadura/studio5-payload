import { slateEditor } from '@payloadcms/richtext-slate'
import type { Block } from 'payload/types'

import { backgroundColor } from '../../fields/backgroundColor'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  imageURL:
    'https://res.cloudinary.com/patrik-vadura/image/upload/v1710759866/Payload/Blocks/block_media-block_ayshne.webp',
  fields: [
    {
      type: 'row',
      fields: [
        backgroundColor({ overrides: { name: 'mediaBlockBackgroundColor' } }),
        {
          name: 'position',
          type: 'select',
          defaultValue: 'default',
          options: [
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Fullscreen',
              value: 'fullscreen',
            },
          ],
        },
      ],
    },
    {
      name: 'media',
      label: 'Media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'caption',
      label: 'Popisek',
      type: 'richText',
      editor: slateEditor({
        admin: {
          elements: [],
        },
      }),
    },
  ],
}
