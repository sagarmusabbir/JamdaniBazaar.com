import React from 'react'

import Image from 'next/image'

export function Logo() {
  return (
    <div>
      <Image
        className="h-20 object-contain dark:invert"
        src="/logo.svg"
        alt="payload-bracketui-logo"
        width={177}
        height={57}
      />
    </div>
  )
}

export default Logo
