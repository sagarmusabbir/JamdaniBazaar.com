/** Shared Tailwind class strings so pages stay consistent and short. */
export const ui = {
  h1: 'font-serif text-4xl font-semibold tracking-tight text-indigo-950 sm:text-5xl',
  h2: 'mt-12 font-serif text-2xl font-semibold tracking-tight text-indigo-950',
  h3: 'font-serif text-xl font-semibold text-indigo-950',
  p: 'mt-4 max-w-[65ch] text-lg leading-8 text-slate-800',
  lead: 'mt-5 max-w-[65ch] text-xl leading-8 text-slate-700',
  ul: 'mt-4 max-w-[65ch] list-disc space-y-2 pl-6 text-lg leading-8 text-slate-800',
  link: 'font-medium text-indigo-800 underline underline-offset-4 hover:text-indigo-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
  buttonPrimary:
    'inline-block rounded-md bg-indigo-950 px-5 py-3 font-medium text-white hover:bg-indigo-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
  buttonLight:
    'inline-block rounded-md bg-white px-5 py-3 font-medium text-indigo-950 hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
  buttonLightOutline:
    'inline-block rounded-md border border-white/60 px-5 py-3 font-medium text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
  container: 'mx-auto w-full max-w-5xl px-4',
  narrow: 'mx-auto w-full max-w-3xl px-4 py-12',
} as const
