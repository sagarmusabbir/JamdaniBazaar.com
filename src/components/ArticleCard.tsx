import Link from 'next/link'
import type { LearnArticle } from '@/content/learn'
import { formatDate } from '@/lib/format'

export function ArticleCard({
  article,
  headingLevel = 'h2',
}: {
  article: LearnArticle
  headingLevel?: 'h2' | 'h3'
}) {
  const Heading = headingLevel
  return (
    <article className="h-full border-t-2 border-indigo-950 pt-4">
      <p className="text-sm text-slate-600">{article.category}</p>
      <Heading className="mt-1 font-serif text-xl font-semibold text-indigo-950">
        <Link
          href={`/learn/${article.slug}`}
          className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {article.title}
        </Link>
      </Heading>
      <p className="mt-2 text-slate-700">{article.description}</p>
      <p className="mt-3 text-sm text-slate-600">
        <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>,{' '}
        {article.readingMinutes} min read
      </p>
    </article>
  )
}
