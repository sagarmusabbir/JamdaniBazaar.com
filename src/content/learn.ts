/**
 * Learn articles. To publish a new Jamdani guide, add one object to `learnArticles`.
 * It automatically gets: its own /learn/<slug> page, a card on /learn and the homepage,
 * metadata, Article JSON-LD, breadcrumbs and a sitemap entry.
 */
export type Block =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }

export type LearnArticle = {
  slug: string
  title: string
  description: string
  category: string
  publishedAt: string // YYYY-MM-DD
  updatedAt?: string // YYYY-MM-DD
  readingMinutes: number
  body: Block[]
}

export const learnArticles: LearnArticle[] = [
  {
    slug: 'what-is-jamdani',
    title: 'What Is Jamdani? A Simple Guide',
    description:
      'Jamdani is a handwoven muslin textile from Bangladesh. Learn what makes it special, how it is made and which motifs to know.',
    category: 'Basics',
    publishedAt: '2026-10-23',
    readingMinutes: 4,
    body: [
      {
        type: 'p',
        text: 'Jamdani is a fine, handwoven cotton textile from Bangladesh, known for patterns that are woven directly into the cloth instead of being printed or embroidered on top. It is most often made into sarees, and a single piece can take weeks or even months to finish.',
      },
      { type: 'h2', text: 'How Jamdani is made' },
      {
        type: 'p',
        text: 'Weavers work on a loom with the design planned in advance. While the cloth is being woven, extra weft threads are inserted by hand, one motif at a time, so the pattern becomes part of the fabric itself. It is slow, careful work that depends on a steady eye and years of practice.',
      },
      { type: 'h2', text: 'Common Jamdani motifs' },
      {
        type: 'ul',
        items: [
          'Buti: small flowers or sprigs scattered across the cloth.',
          'Panna hajar: a dense field of small gem-shaped motifs.',
          'Terchha: diagonal bands of pattern running across the body.',
        ],
      },
      { type: 'h2', text: 'Why Jamdani matters' },
      {
        type: 'p',
        text: 'UNESCO added the traditional art of Jamdani weaving to its list of Intangible Cultural Heritage of Humanity in 2013. Choosing genuine Jamdani helps support the weavers who keep this craft alive.',
      },
    ],
  },
  {
    slug: 'history-of-jamdani',
    title: 'The History of Jamdani Weaving',
    description:
      'Trace Jamdani from the legendary Dhaka muslin tradition to the weaving communities that keep the craft going today.',
    category: 'Heritage',
    publishedAt: '2026-10-22',
    readingMinutes: 5,
    body: [
      {
        type: 'p',
        text: 'Jamdani grew out of the fine muslin weaving of the Dhaka region, a tradition admired far beyond Bengal for centuries. Understanding that background explains why Jamdani is valued as both a textile and a piece of living heritage.',
      },
      { type: 'h2', text: 'From Dhaka muslin to Jamdani' },
      {
        type: 'p',
        text: 'Dhaka muslin was so light and fine that it was often described as woven air. Jamdani builds on that skill by adding patterned motifs to the same kind of delicate cloth.',
      },
      { type: 'h2', text: 'Decline and revival' },
      {
        type: 'p',
        text: 'Changing trade patterns and cheaper machine-made cloth reduced demand for handloom textiles. Over time, weaving families, designers and cultural organisations have worked to pass the skills on and find new customers.',
      },
      { type: 'h2', text: 'Jamdani today' },
      {
        type: 'p',
        text: 'Weaving clusters near Dhaka, including areas such as Rupganj in Narayanganj district, are still closely associated with Jamdani. Today the craft is recognised internationally, and many buyers look for sarees made with traceable, fair production.',
      },
    ],
  },
  {
    slug: 'how-to-identify-authentic-jamdani',
    title: 'How to Identify Authentic Jamdani',
    description:
      'Five practical checks to tell handwoven Jamdani from printed or machine-made imitations before you buy.',
    category: 'Buying guide',
    publishedAt: '2026-10-21',
    readingMinutes: 4,
    body: [
      {
        type: 'p',
        text: 'Because real Jamdani takes so long to weave, imitations are common. These checks will not replace expert advice, but they will help you ask better questions.',
      },
      { type: 'h2', text: 'Look at the back of the cloth' },
      {
        type: 'p',
        text: 'On handwoven Jamdani the motifs are built into the weave, so the pattern is visible on both sides. A printed design usually looks faded or blank on the reverse.',
      },
      { type: 'h2', text: 'Expect small irregularities' },
      {
        type: 'p',
        text: 'Hand work is never perfectly uniform. Tiny differences between repeated motifs are a good sign. Identical, flawless repeats can point to machine production.',
      },
      { type: 'h2', text: 'Ask the seller these questions' },
      {
        type: 'ul',
        items: [
          'Who wove this piece, and where?',
          'How long did it take to weave?',
          'What yarn is used, and what is the thread count?',
          'Can you show the reverse side and the loom-end finishing?',
        ],
      },
      { type: 'h2', text: 'Be careful with very low prices' },
      {
        type: 'p',
        text: 'Weaving a Jamdani saree takes many days of skilled labour. A price that seems too good to be true usually is.',
      },
    ],
  },
  {
    slug: 'how-to-care-for-jamdani-saree',
    title: 'How to Care for a Jamdani Saree',
    description:
      'Simple washing, drying, ironing and storage tips to keep a handwoven Jamdani saree looking beautiful for years.',
    category: 'Care',
    publishedAt: '2026-10-20',
    readingMinutes: 3,
    body: [
      {
        type: 'p',
        text: 'A well-kept Jamdani saree can last for decades. The fabric is delicate, so gentle handling matters more than any special product.',
      },
      { type: 'h2', text: 'Washing' },
      {
        type: 'p',
        text: 'Dry cleaning is the safest choice. If you wash at home, use cold water and a mild detergent, soak briefly, and rinse well. Never wring or scrub the cloth.',
      },
      { type: 'h2', text: 'Drying and ironing' },
      {
        type: 'p',
        text: 'Dry flat or hang in the shade, away from direct sun. Iron on a low heat setting on the reverse side while the cloth is slightly damp.',
      },
      { type: 'h2', text: 'Storage' },
      {
        type: 'ul',
        items: [
          'Wrap the saree in a clean, breathable cotton or muslin cloth.',
          'Avoid plastic bags, which trap moisture.',
          'Refold along different lines every few months to prevent permanent creases.',
        ],
      },
    ],
  },
]

export const getSortedArticles = () =>
  [...learnArticles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

export const getArticle = (slug: string) => learnArticles.find((a) => a.slug === slug)
