import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { buildGraph, buildMetadata } from '@/lib/seo'
import { SITE_NAME } from '@/lib/site'
import { ui } from '@/lib/ui'

const TITLE = 'Jamdani FAQ'
const DESCRIPTION = `Answers to common questions about Jamdani sarees, how they are made, how to spot authentic pieces and what to expect from ${SITE_NAME}.`
const PATH = '/faq'
const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'FAQ', path: PATH },
]

const faqs = [
  {
    q: 'What is Jamdani?',
    a: 'Jamdani is a handwoven cotton textile from Bangladesh. Its motifs are woven into the cloth on the loom rather than printed or embroidered afterwards.',
  },
  {
    q: 'Why is Jamdani so expensive?',
    a: 'Each motif is inserted by hand, so a single saree can take weeks or months to weave. The price reflects that skilled labour and the quality of the yarn.',
  },
  {
    q: 'How can I tell if Jamdani is authentic?',
    a: 'Check that the pattern is visible on both sides of the cloth, expect small natural irregularities, and ask the seller who wove it and where. Our authenticity guide explains more.',
  },
  {
    q: 'How do I wash a Jamdani saree?',
    a: 'Dry cleaning is safest. At home, use cold water and a mild detergent, avoid wringing, and dry in the shade.',
  },
  {
    q: `Does ${SITE_NAME} sell sarees?`,
    a: 'Not yet. We are preparing a shop for authentic handwoven Jamdani. For now the site offers free guides.',
  },
  {
    q: `How can I contact ${SITE_NAME}?`,
    a: 'Use our contact page and we will reply within two business days.',
  },
]

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={buildGraph({
          path: PATH,
          title: `${TITLE} | ${SITE_NAME}`,
          description: DESCRIPTION,
          crumbs,
        })}
      />
      <div className={ui.narrow}>
        <Breadcrumbs items={crumbs} />
        <h1 className={`${ui.h1} mt-6`}>Jamdani FAQ</h1>
        <p className={ui.lead}>Quick answers to the questions we hear most.</p>

        <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((f) => (
            <details key={f.q} className="py-4">
              <summary className="cursor-pointer font-serif text-xl font-semibold text-indigo-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {f.q}
              </summary>
              <p className="mt-3 max-w-[65ch] text-lg leading-8 text-slate-800">{f.a}</p>
            </details>
          ))}
        </div>

        <p className={ui.p}>
          Still curious? Browse our{' '}
          <Link href="/learn" className={ui.link}>
            Jamdani guides
          </Link>{' '}
          or{' '}
          <Link href="/contact" className={ui.link}>
            contact us
          </Link>
          .
        </p>
      </div>
    </>
  )
}
