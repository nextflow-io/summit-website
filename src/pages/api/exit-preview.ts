import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ cookies, redirect, url }) => {
  console.log('🔴 Exit preview endpoint hit!');
  
  // Disable preview mode
  cookies.delete('sanity-preview', { path: '/' });
  
  console.log('✅ Cookie deleted, redirecting...');
  
  // Redirect
  const redirectTo = url.searchParams.get('redirect') || '/';
  return redirect(redirectTo);
};