import Link from 'next/link'
import { LEGAL_LINKS, NAV_LINKS, ORGANIZATION, SITE_NAME } from '@/lib/site'
import { ui } from '@/lib/ui'

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className={`${ui.container} grid gap-8 py-10 sm:grid-cols-2`}>
        <div>
          <p className="font-serif text-xl font-semibold text-indigo-950">{SITE_NAME}</p>
          <p className="mt-2 max-w-sm text-slate-700">
            A guide to Jamdani, the handwoven muslin art of Bangladesh.
          </p>
        </div>
        <nav aria-label="Footer" className="flex gap-10">
          <ul className="space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={ui.link}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={ui.link}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-slate-200">
        <p className={`${ui.container} py-4 text-sm text-slate-600`}>
          &copy; {new Date().getFullYear()} {SITE_NAME}. Operated by{' '}
          <a href={ORGANIZATION.url} className={ui.link}>
            {ORGANIZATION.name}
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
