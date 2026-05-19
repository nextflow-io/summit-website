import { defineMiddleware } from 'astro:middleware'

const DRAFT_MODE_COOKIE = 'sanity-draft-mode'

export const onRequest = defineMiddleware((context, next) => {
  const draftMode = context.cookies.get(DRAFT_MODE_COOKIE)?.value === 'true'
  context.locals.draftMode = draftMode
  return next()
})
