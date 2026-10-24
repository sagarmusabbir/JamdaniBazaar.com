export const SITE_NAME = 'JamdaniBazaar'
export const SITE_TAGLINE = 'Handwoven Jamdani, explained'
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jamdanibazaar.com').replace(
  /\/$/,
  '',
)
export const SITE_DESCRIPTION =
  'JamdaniBazaar is your guide to Jamdani, the handwoven muslin textile of Bangladesh. Learn its history, spot the real thing and care for it.'
export const CONTACT_EMAIL = 'hello@jamdanibazaar.com'

/** Publisher entity. Exactly as specified; do not add fields without reason. */
export const ORGANIZATION = {
  '@type': 'Organization',
  '@id': 'https://www.thirdbracket.co.uk/#organization',
  name: 'Third Bracket Limited',
  legalName: 'Third Bracket Limited',
  url: 'https://www.thirdbracket.co.uk',
} as const

export const NAV_LINKS = [
  { href: '/learn', label: 'Learn' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
] as const

export const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
] as const

export const OG_IMAGE_PATH = '/og.png'
export const OG_IMAGE_ALT = `${SITE_NAME} - ${SITE_TAGLINE}`
