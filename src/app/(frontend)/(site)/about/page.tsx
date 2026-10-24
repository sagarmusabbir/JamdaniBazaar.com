import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { buildGraph, buildMetadata } from '@/lib/seo'
import { ORGANIZATION, SITE_NAME } from '@/lib/site'
import { ui } from '@/lib/ui'

const TITLE = `About ${SITE_NAME}`
const DESCRIPTION = `${SITE_NAME} is a growing home for Jamdani, the handwoven muslin art of Bangladesh. Learn what we do and who is behind the site.`
const PATH = '/about'
const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'About', path: PATH },
]

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={buildGraph({
          path: PATH,
          title: TITLE,
          description: DESCRIPTION,
          crumbs,
          pageType: 'AboutPage',
        })}
      />
      <div className={ui.narrow}>
        <Breadcrumbs items={crumbs} />
        <h1 className={`${ui.h1} mt-6`}>About {SITE_NAME}</h1>
        <p className={ui.lead}>
          {SITE_NAME} exists to make Jamdani easier to understand, easier to recognise and easier to
          love.
        </p>

        <section aria-labelledby="mission-heading">
          <h2 id="mission-heading" className={ui.h2}>
            Our mission
          </h2>
          <p className={ui.p}>
            Jamdani is one of the world&rsquo;s most refined handloom traditions, yet many people
            cannot tell it apart from printed or machine-made cloth. We publish clear, honest guides
            so that more people can appreciate the craft and buy it with confidence.
          </p>
        </section>

        <section aria-labelledby="what-heading">
          <h2 id="what-heading" className={ui.h2}>
            What we do
          </h2>
          <ul className={ui.ul}>
            <li>
              Publish practical{' '}
              <Link href="/learn" className={ui.link}>
                Jamdani guides
              </Link>{' '}
              on history, authenticity and care.
            </li>
            <li>Highlight the weavers and communities behind the cloth.</li>
            <li>Prepare an online shop for authentic handwoven Jamdani.</li>
          </ul>
        </section>

        <section aria-labelledby="who-heading">
          <h2 id="who-heading" className={ui.h2}>
            Who is behind {SITE_NAME}
          </h2>
          <p className={ui.p}>
            {SITE_NAME} is operated by{' '}
            <a href={ORGANIZATION.url} className={ui.link}>
              {ORGANIZATION.legalName}
            </a>
            . You can reach the team on our{' '}
            <Link href="/contact" className={ui.link}>
              contact page
            </Link>
            .
          </p>
        </section>
      </div>
    </>
  )
}
