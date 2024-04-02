import { webpackBundler } from '@payloadcms/bundler-webpack'
// import { postgresAdapter } from '@payloadcms/db-postgres'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'
import seo from '@payloadcms/plugin-seo'
import path from 'path'
import { buildConfig } from 'payload/config'
// import { slateEditor } from '@payloadcms/richtext-slate'
import type { RichTextAdapter } from 'payload/types'

import Categories from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Projects } from './collections/Projects'
import { Users } from './collections/Users'
import { MainMenu } from './globals/MainMenu'
import { Settings } from './globals/Settings'

const adapter = s3Adapter({
  config: {
    endpoint: process.env.NEXT_PUBLIC_S3_ENDPOINT,
    region: process.env.S3_REGION,
    forcePathStyle: true,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
    },
  },
  bucket: process.env.NEXT_PUBLIC_S3_BUCKET as string,
})

export function emptyEditor(): RichTextAdapter<any, {}, {}> {
  return {
    CellComponent: () => null,
    FieldComponent: () => null,
    outputSchema: () => {
      return {
        items: {
          type: 'object',
        },
        type: ['array'],
      }
    },
    populationPromise() {
      return null
    },
    validate: () => true,
  }
}

export default buildConfig({
  // db: postgresAdapter({
  //   pool: {
  //     connectionString: process.env.POSTGRES_URI
  //   }
  // }),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI as string,
  }),
  editor: emptyEditor(),
  admin: {
    bundler: webpackBundler(),
  },
  collections: [Pages, Projects, Users, Media, Categories],
  globals: [MainMenu, Settings],
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    seo({
      collections: ['pages'],
      uploadsCollection: 'media',
    }),
    cloudStorage({
      collections: {
        media: {
          adapter,
          disablePayloadAccessControl: true,
        },
      },
    }),
  ],
})
