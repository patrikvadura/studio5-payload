import type { CollectionConfig } from 'payload/types'

import { CallToAction } from '../blocks/CallToAction'
import { Content } from '../blocks/Content'
import { MediaBlock } from '../blocks/Media'
import { hero } from '../fields/hero'
import { slugField } from '../fields/slug'
import { regenerateStaticPage } from '../utilities/regenerateStaticPage'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Případová studie',
    plural: 'Případové studie',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt', 'id', '_status'],
    preview: (doc, { locale }) => {
      if (doc?.slug) {
        return `/${doc.slug}${locale ? `?locale=${locale}` : ''}`
      }

      return ''
    },
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [regenerateStaticPage],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [hero],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              blocks: [CallToAction, Content, MediaBlock],
            },
          ],
        },
      ],
    },
    {
      name: 'relatedProjects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        }
      },
    },
    slugField(),
  ],
}
