import type { APIRoute } from 'astro'

export const prerender = false

export const GET: APIRoute = ({ cookies, redirect }) => {
  cookies.delete('sanity-draft-mode', { path: '/' })
  return redirect('/')
}
