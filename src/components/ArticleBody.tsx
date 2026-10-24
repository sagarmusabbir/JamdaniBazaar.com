import type { Block } from '@/content/learn'
import { ui } from '@/lib/ui'

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div>
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2':
            return (
              <h2 key={i} className={ui.h2}>
                {b.text}
              </h2>
            )
          case 'p':
            return (
              <p key={i} className={ui.p}>
                {b.text}
              </p>
            )
          case 'ul':
            return (
              <ul key={i} className={ui.ul}>
                {b.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )
        }
      })}
    </div>
  )
}
