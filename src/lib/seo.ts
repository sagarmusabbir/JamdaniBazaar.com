import type { Metadata } from 'next'
import {
  OG_IMAGE_ALT,
  OG_IMAGE_PATH,
  ORGANIZATION,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from './site'

export type Crumb = { name: string; path: string }
export type PageType = 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage'

export const absoluteUrl = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`)

type MetaInput = {
  /** Page title WITHOUT the brand suffix (the brand is appended for you). */
  title: string
  description: string
  path: string
  /** Use the title exactly as given, with no " | JamdaniBazaar" suffix. */
  absoluteTitle?: boolean
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  type = 'website',
  publishedTime,
  modifiedTime,
}: MetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`
  const base = {
    url: path,
    siteName: SITE_NAME,
    title: fullTitle,
    description,
    locale: 'en_US',
    images: [{ url: OG_IMAGE_PATH, width: 1200, height: 630, alt: OG_IMAGE_ALT }],
  }

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph:
      type === 'article'
        ? { ...base, type: 'article', publishedTime, modifiedTime }
        : { ...base, type: 'website' },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [OG_IMAGE_PATH],
    },
  }
}

type GraphInput = {
  path: string
  title: string
  description: string
  crumbs: Crumb[]
  pageType?: PageType
  /** Extra nodes for this page (Article, ItemList, ...). */
  extra?: Record<string, unknown>[]
}

/**
 * One @graph per page: Organization + WebSite + WebPage (+ BreadcrumbList + extras),
 * all linked by @id so crawlers see a single connected entity graph.
 */
export function buildGraph({
  path,
  title,
  description,
  crumbs,
  pageType = 'WebPage',
  extra = [],
}: GraphInput) {
  const pageUrl = absoluteUrl(path)
  const websiteId = `${SITE_URL}/#website`
  const hasCrumbs = crumbs.length > 1

  return {
    '@context': 'https://schema.org',
    '@graph': [
      { ...ORGANIZATION },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: 'en',
        publisher: { '@id': ORGANIZATION['@id'] },
      },
      {
        '@type': pageType,
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        inLanguage: 'en',
        isPartOf: { '@id': websiteId },
        ...(hasCrumbs ? { breadcrumb: { '@id': `${pageUrl}#breadcrumb` } } : {}),
      },
      ...(hasCrumbs
        ? [
            {
              '@type': 'BreadcrumbList',
              '@id': `${pageUrl}#breadcrumb`,
              itemListElement: crumbs.map((c, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: c.name,
                item: absoluteUrl(c.path),
              })),
            },
          ]
        : []),
      ...extra,
    ],
  }
}
