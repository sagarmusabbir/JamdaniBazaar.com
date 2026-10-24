import { ImageResponse } from 'next/og'
import { SITE_NAME, SITE_TAGLINE } from './site'

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1e1b4b',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', fontSize: 120, fontWeight: 700, letterSpacing: -3 }}>
          {SITE_NAME}
        </div>
        <div style={{ display: 'flex', width: 180, height: 6, background: '#c7d2fe', marginTop: 28 }} />
        <div style={{ display: 'flex', marginTop: 28, fontSize: 38, color: '#c7d2fe' }}>
          {SITE_TAGLINE}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
