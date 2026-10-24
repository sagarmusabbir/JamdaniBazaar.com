import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { buildGraph, buildMetadata } from '@/lib/seo'
import { CONTACT_EMAIL, ORGANIZATION, SITE_NAME } from '@/lib/site'
import { ui } from '@/lib/ui'

const TITLE = 'Terms of Use'
const DESCRIPTION = `The terms that apply when you use ${SITE_NAME} and read our Jamdani guides.`
const PATH = '/terms'
const UPDATED = '2026-10-24'
const crumbs = [
  { name: 'Home', path: '/' },
  { name: TITLE, path: PATH },
]

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function TermsPage() {
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
        <h1 className={`${ui.h1} mt-6`}>Terms of Use</h1>
        <p className="mt-4 text-slate-600">
          Last updated: <time dateTime={UPDATED}>24 October 2026</time>
        </p>
        <p className={ui.lead}>
          By using {SITE_NAME} you agree to these terms. {SITE_NAME} is operated by{' '}
          {ORGANIZATION.legalName}.
        </p>

        <section aria-labelledby="use-heading">
          <h2 id="use-heading" className={ui.h2}>
            Using the site
          </h2>
          <p className={ui.p}>
            You may read and share links to our guides for personal, non-commercial use. Please do
            not misuse the site or try to disrupt it.
          </p>
        </section>

        <section aria-labelledby="content-heading">
          <h2 id="content-heading" className={ui.h2}>
            Our content
          </h2>
          <p className={ui.p}>
            The text, images and design on {SITE_NAME} belong to us or our licensors. You may not
            copy or republish them at scale without written permission.
          </p>
        </section>

        <section aria-labelledby="info-heading">
          <h2 id="info-heading" className={ui.h2}>
            Information, not advice
          </h2>
          <p className={ui.p}>
            Our guides are for general information. We work to keep them accurate, but we cannot
            guarantee that every detail is complete or current.
          </p>
        </section>

        <section aria-labelledby="liability-heading">
          <h2 id="liability-heading" className={ui.h2}>
            Liability
          </h2>
          <p className={ui.p}>
            To the extent the law allows, we are not responsible for losses that result from using
            the site or relying on its content.
          </p>
        </section>

        <section aria-labelledby="contact-heading">
          <h2 id="contact-heading" className={ui.h2}>
            Questions
          </h2>
          <p className={ui.p}>
            Contact us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className={ui.link}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>
      </div>
    </>
  )
}
