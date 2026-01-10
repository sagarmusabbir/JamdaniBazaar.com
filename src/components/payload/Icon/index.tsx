import React from 'react'

import Image from 'next/image'

export function Icon() {
  return (
    <div>
      <Image
        className="h-12 object-contain dark:invert"
        src="/favicon-light.svg"
        width={64}
        height={64}
        alt="icon"
      />
    </div>
  )
}

export default Icon
