import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { buildGraph, buildMetadata } from '@/lib/seo'
import { CONTACT_EMAIL, ORGANIZATION, SITE_NAME } from '@/lib/site'
import { ui } from '@/lib/ui'

const TITLE = 'Privacy Policy'
const DESCRIPTION = `How ${SITE_NAME} collects, uses and protects your information when you visit jamdanibazaar.com.`
const PATH = '/privacy'
const UPDATED = '2026-10-24'
const crumbs = [
  { name: 'Home', path: '/' },
  { name: TITLE, path: PATH },
]

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function PrivacyPage() {
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
        <h1 className={`${ui.h1} mt-6`}>Privacy Policy</h1>
        <p className="mt-4 text-slate-600">
          Last updated: <time dateTime={UPDATED}>24 October 2026</time>
        </p>
        <p className={ui.lead}>
          This policy explains what information {SITE_NAME} collects and how it is used. {SITE_NAME}{' '}
          is operated by {ORGANIZATION.legalName}.
        </p>

        <section aria-labelledby="collect-heading">
          <h2 id="collect-heading" className={ui.h2}>
            Information we collect
          </h2>
          <ul className={ui.ul}>
            <li>Information you send us, such as your name and email address when you contact us.</li>
            <li>Basic usage data, such as pages visited, device type and approximate location.</li>
          </ul>
        </section>

        <section aria-labelledby="use-heading">
          <h2 id="use-heading" className={ui.h2}>
            How we use information
          </h2>
          <ul className={ui.ul}>
            <li>To reply to your messages.</li>
            <li>To understand how the site is used and improve our guides.</li>
            <li>To keep the site secure and working properly.</li>
          </ul>
        </section>

        <section aria-labelledby="cookies-heading">
          <h2 id="cookies-heading" className={ui.h2}>
            Cookies and analytics
          </h2>
          <p className={ui.p}>
            We may use cookies or similar technologies for essential site functions and to measure
            traffic. You can control cookies in your browser settings.
          </p>
        </section>

        <section aria-labelledby="sharing-heading">
          <h2 id="sharing-heading" className={ui.h2}>
            Sharing your information
          </h2>
          <p className={ui.p}>
            We do not sell your personal information. We share it only with service providers who
            help us run the site, or when the law requires it.
          </p>
        </section>

        <section aria-labelledby="rights-heading">
          <h2 id="rights-heading" className={ui.h2}>
            Your choices
          </h2>
          <p className={ui.p}>
            You may ask us to access, correct or delete the personal information we hold about you.
            Email{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className={ui.link}>
              {CONTACT_EMAIL}
            </a>{' '}
            and we will respond as soon as we can.
          </p>
        </section>

        <section aria-labelledby="changes-heading">
          <h2 id="changes-heading" className={ui.h2}>
            Changes to this policy
          </h2>
          <p className={ui.p}>
            We may update this policy from time to time. The date at the top shows when it was last
            changed.
          </p>
        </section>
      </div>
    </>
  )
}
