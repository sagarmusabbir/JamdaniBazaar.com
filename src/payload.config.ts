import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      title: 'Admin - Payload Tailwind v4 Template',
      description: 'The best admin panel in the world',
      icons: [
        // Fallback and explicit icons for admin head
        { rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg' },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          url: '/favicon-light.svg',
          media: '(prefers-color-scheme: light)',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          url: '/favicon-dark.svg',
          media: '(prefers-color-scheme: dark)',
        },
      ],
    },
    components: {
      graphics: {
        Icon: '/components/payload/Icon/index.tsx#Icon',
        Logo: '/components/payload/Logo/index.tsx#Logo',
      },
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
})
