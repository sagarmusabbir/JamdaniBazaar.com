import { ArticleCard } from '@/components/ArticleCard'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { getSortedArticles } from '@/content/learn'
import { absoluteUrl, buildGraph, buildMetadata } from '@/lib/seo'
import { SITE_NAME } from '@/lib/site'
import { ui } from '@/lib/ui'

const TITLE = 'Learn About Jamdani'
const DESCRIPTION = `Free guides to Jamdani: what it is, its history, how to identify authentic pieces and how to care for a Jamdani saree. From ${SITE_NAME}.`
const PATH = '/learn'
const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Learn', path: PATH },
]

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function LearnIndexPage() {
  const articles = getSortedArticles()

  return (
    <>
      <JsonLd
        data={buildGraph({
          path: PATH,
          title: `${TITLE} | ${SITE_NAME}`,
          description: DESCRIPTION,
          crumbs,
          pageType: 'CollectionPage',
          extra: [
            {
              '@type': 'ItemList',
              '@id': `${absoluteUrl(PATH)}#list`,
              itemListElement: articles.map((a, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: absoluteUrl(`/learn/${a.slug}`),
                name: a.title,
              })),
            },
          ],
        })}
      />
      <div className={`${ui.container} py-12`}>
        <Breadcrumbs items={crumbs} />
        <h1 className={`${ui.h1} mt-6`}>Learn about Jamdani</h1>
        <p className={ui.lead}>
          Free, plain-language guides to the history, craft and care of Jamdani.
        </p>
        <ul className="mt-12 grid gap-10 md:grid-cols-2">
          {articles.map((a) => (
            <li key={a.slug}>
              <ArticleCard article={a} headingLevel="h2" />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
