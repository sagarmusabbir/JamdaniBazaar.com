import Link from 'next/link'
import { NAV_LINKS, SITE_NAME } from '@/lib/site'
import { ui } from '@/lib/ui'

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className={`${ui.container} flex flex-wrap items-center justify-between gap-4 py-4`}>
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-tight text-indigo-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {SITE_NAME}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex gap-6 text-base font-medium text-slate-800">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="hover:text-indigo-800 hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
