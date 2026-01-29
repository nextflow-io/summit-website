import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ cookies, redirect, url }) => {
  console.log('🔵 Preview endpoint hit!');
  
  // Enable preview mode with simpler settings for local dev
  cookies.set('sanity-preview', 'true', {
    path: '/',
    httpOnly: false, // ✅ Changed to false for easier testing
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 24 hours
  });

  console.log('✅ Cookie set, redirecting...');

  // Redirect to the page specified in the query param
  const redirectTo = url.searchParams.get('redirect') || '/';
  return redirect(redirectTo);
};