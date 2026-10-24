import Link from 'next/link'
import { ArticleCard } from '@/components/ArticleCard'
import { JsonLd } from '@/components/JsonLd'
import { getSortedArticles } from '@/content/learn'
import { buildGraph, buildMetadata } from '@/lib/seo'
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/site'
import { ui } from '@/lib/ui'

const TITLE = `${SITE_NAME} | Handwoven Jamdani from Bangladesh`

export const metadata = buildMetadata({
  title: TITLE,
  description: SITE_DESCRIPTION,
  path: '/',
  absoluteTitle: true,
})

const lattice = {
  backgroundImage:
    'repeating-linear-gradient(45deg, rgba(255,255,255,0.07) 0 1px, transparent 1px 28px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.07) 0 1px, transparent 1px 28px)',
}

const values = [
  {
    title: 'Clear explanations',
    text: 'Plain-language guides on what Jamdani is, how it is woven and what to look for.',
  },
  {
    title: 'Respect for weavers',
    text: 'We credit the craft and the communities behind every handwoven piece.',
  },
  {
    title: 'Buying with confidence',
    text: 'Learn to recognise authentic Jamdani before you spend a single taka.',
  },
]

export default function HomePage() {
  const latest = getSortedArticles().slice(0, 3)

  return (
    <>
      <JsonLd
        data={buildGraph({
          path: '/',
          title: TITLE,
          description: SITE_DESCRIPTION,
          crumbs: [{ name: 'Home', path: '/' }],
        })}
      />

      <section aria-labelledby="hero-heading" className="bg-indigo-950 text-white" style={lattice}>
        <div className={`${ui.container} py-20 sm:py-28`}>
          <h1
            id="hero-heading"
            className="max-w-3xl font-serif text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            {SITE_NAME}: handwoven Jamdani from Bangladesh
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-indigo-100">
            {SITE_NAME} is a guide to Jamdani, the fine muslin cloth whose patterns are woven in by
            hand. Learn its story, how to spot the real thing and how to care for it.
          </p>
          <p className="mt-10 flex flex-wrap gap-4">
            <Link href="/learn" className={ui.buttonLight}>
              Start learning about Jamdani
            </Link>
            <Link href="/about" className={ui.buttonLightOutline}>
              About {SITE_NAME}
            </Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="what-heading" className={`${ui.container} py-16`}>
        <h2 id="what-heading" className={`${ui.h2} mt-0`}>
          What is Jamdani?
        </h2>
        <p className={ui.p}>
          Jamdani is a handwoven cotton textile in which decorative motifs are added to the cloth
          while it is on the loom. Nothing is printed on top, so the pattern is part of the fabric.
          It is best known as the Jamdani saree.
        </p>
        <p className={ui.p}>
          <Link href="/learn/what-is-jamdani" className={ui.link}>
            Read the full guide to Jamdani
          </Link>
        </p>
      </section>

      <section aria-labelledby="guides-heading" className="bg-slate-50 py-16">
        <div className={ui.container}>
          <h2 id="guides-heading" className={`${ui.h2} mt-0`}>
            Latest Jamdani guides
          </h2>
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            {latest.map((a) => (
              <li key={a.slug}>
                <ArticleCard article={a} headingLevel="h3" />
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link href="/learn" className={ui.link}>
              See all Jamdani guides
            </Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="why-heading" className={`${ui.container} py-16`}>
        <h2 id="why-heading" className={`${ui.h2} mt-0`}>
          Why {SITE_NAME}
        </h2>
        <ul className="mt-8 grid gap-8 md:grid-cols-3">
          {values.map((v) => (
            <li key={v.title}>
              <h3 className={ui.h3}>{v.title}</h3>
              <p className="mt-2 text-slate-700">{v.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="shop-heading" className="bg-indigo-950 py-14 text-white">
        <div className={ui.container}>
          <h2 id="shop-heading" className="font-serif text-2xl font-semibold">
            The {SITE_NAME} shop is on its way
          </h2>
          <p className="mt-3 max-w-[65ch] text-lg text-indigo-100">
            We are building a store for authentic handwoven Jamdani. Until then, our guides are free
            to read. Questions or ideas? We would love to hear from you.
          </p>
          <p className="mt-6">
            <Link href="/contact" className={ui.buttonLight}>
              Contact {SITE_NAME}
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
