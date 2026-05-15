import type { APIRoute } from 'astro'
import { validatePreviewUrl } from '@sanity/preview-url-secret'
import { sanityClient } from 'sanity:client'

export const prerender = false

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const token = import.meta.env.SANITY_API_READ_TOKEN

  if (!token) {
    return new Response('SANITY_API_READ_TOKEN is not set', { status: 500 })
  }

  const clientWithToken = sanityClient.withConfig({
    useCdn: false,
    token,
  })

  const { isValid, redirectTo = '/' } = await validatePreviewUrl(clientWithToken, request.url)

  if (!isValid) {
    return new Response('Invalid preview secret', { status: 401 })
  }

  cookies.set('sanity-draft-mode', 'true', {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    path: '/',
    maxAge: 60 * 60, // 1 hour
  })

  return redirect(redirectTo)
}
