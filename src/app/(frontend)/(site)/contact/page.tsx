import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { buildGraph, buildMetadata } from '@/lib/seo'
import { CONTACT_EMAIL, SITE_NAME } from '@/lib/site'
import { ui } from '@/lib/ui'

const TITLE = `Contact ${SITE_NAME}`
const DESCRIPTION = `Get in touch with ${SITE_NAME} for questions about Jamdani, partnerships or press. We usually reply within two business days.`
const PATH = '/contact'
const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: PATH },
]

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={buildGraph({
          path: PATH,
          title: TITLE,
          description: DESCRIPTION,
          crumbs,
          pageType: 'ContactPage',
        })}
      />
      <div className={ui.narrow}>
        <Breadcrumbs items={crumbs} />
        <h1 className={`${ui.h1} mt-6`}>Contact {SITE_NAME}</h1>
        <p className={ui.lead}>
          Have a question about Jamdani, or an idea for a guide? Send us an email.
        </p>

        <section aria-labelledby="email-heading">
          <h2 id="email-heading" className={ui.h2}>
            Email us
          </h2>
          <p className={ui.p}>
            <a href={`mailto:${CONTACT_EMAIL}`} className={ui.link}>
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className={ui.p}>We usually reply within two business days.</p>
        </section>

        <section aria-labelledby="topics-heading">
          <h2 id="topics-heading" className={ui.h2}>
            What you can write to us about
          </h2>
          <ul className={ui.ul}>
            <li>Questions about Jamdani, its history or its care</li>
            <li>Corrections or suggestions for our guides</li>
            <li>Weavers, makers and partnership enquiries</li>
            <li>Press and media requests</li>
          </ul>
        </section>
      </div>
    </>
  )
}
