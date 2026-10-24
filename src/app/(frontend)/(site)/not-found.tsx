import Link from 'next/link'
import { ui } from '@/lib/ui'

export default function NotFound() {
  return (
    <div className={ui.narrow}>
      <h1 className={ui.h1}>Page not found</h1>
      <p className={ui.lead}>
        We could not find that page. It may have moved, or the address may be wrong.
      </p>
      <p className="mt-8 flex flex-wrap gap-4">
        <Link href="/" className={ui.buttonPrimary}>
          Go to the homepage
        </Link>
        <Link href="/learn" className={ui.link}>
          Browse Jamdani guides
        </Link>
      </p>
    </div>
  )
}
