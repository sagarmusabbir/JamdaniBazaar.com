import type { MetadataRoute } from 'next'
import { learnArticles } from '@/content/learn'
import { SITE_URL } from '@/lib/site'

const staticPaths = ['/', '/learn', '/about', '/faq', '/contact', '/privacy', '/terms']

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({ url: path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}` })),
    ...learnArticles.map((a) => ({
      url: `${SITE_URL}/learn/${a.slug}`,
      lastModified: a.updatedAt ?? a.publishedAt,
    })),
  ]
}
