import { renderOgImage } from '@/lib/og'

// Stable URL for the social image: /og.png
export const dynamic = 'force-static'

export function GET() {
  return renderOgImage()
}
