import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleBody } from '@/components/ArticleBody'
import { ArticleCard } from '@/components/ArticleCard'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { getArticle, getSortedArticles, learnArticles } from '@/content/learn'
import { formatDate } from '@/lib/format'
import { absoluteUrl, buildGraph, buildMetadata } from '@/lib/seo'
import { OG_IMAGE_PATH, ORGANIZATION, SITE_NAME, SITE_URL } from '@/lib/site'
import { ui } from '@/lib/ui'

type Props = { params: Promise<{ slug: string }> }

// Unknown slugs return 404 instead of rendering on demand.
export const dynamicParams = false

export function generateStaticParams() {
  return learnArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/learn/${article.slug}`,
    type: 'article',
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt ?? article.publishedAt,
  })
}

export default async function LearnArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const path = `/learn/${article.slug}`
  const pageUrl = absoluteUrl(path)
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Learn', path: '/learn' },
    { name: article.title, path },
  ]
  const related = getSortedArticles()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3)

  return (
    <>
      <JsonLd
        data={buildGraph({
          path,
          title: `${article.title} | ${SITE_NAME}`,
          description: article.description,
          crumbs,
          extra: [
            {
              '@type': 'Article',
              '@id': `${pageUrl}#article`,
              headline: article.title,
              description: article.description,
              articleSection: article.category,
              datePublished: article.publishedAt,
              dateModified: article.updatedAt ?? article.publishedAt,
              inLanguage: 'en',
              image: `${SITE_URL}${OG_IMAGE_PATH}`,
              mainEntityOfPage: { '@id': `${pageUrl}#webpage` },
              isPartOf: { '@id': `${SITE_URL}/#website` },
              author: { '@id': ORGANIZATION['@id'] },
              publisher: { '@id': ORGANIZATION['@id'] },
            },
          ],
        })}
      />

      <article className={ui.narrow}>
        <header>
          <Breadcrumbs items={crumbs} />
          <p className="mt-6 text-sm text-slate-600">{article.category}</p>
          <h1 className={`${ui.h1} mt-2`}>{article.title}</h1>
          <p className={ui.lead}>{article.description}</p>
          <p className="mt-4 text-sm text-slate-600">
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>,{' '}
            {article.readingMinutes} min read
          </p>
        </header>
        <ArticleBody blocks={article.body} />
      </article>

      {related.length > 0 && (
        <aside aria-labelledby="related-heading" className="bg-slate-50 py-14">
          <div className={ui.container}>
            <h2 id="related-heading" className={`${ui.h2} mt-0`}>
              Keep reading
            </h2>
            <ul className="mt-8 grid gap-8 md:grid-cols-3">
              {related.map((a) => (
                <li key={a.slug}>
                  <ArticleCard article={a} headingLevel="h3" />
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </>
  )
}
