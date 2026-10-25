import type { APIRoute } from 'astro';

// Emits the commit this build came from, so the deploy workflow can prove the
// new build is actually being served.
const buildId = process.env.GITHUB_SHA ?? 'local-dev';

export const GET: APIRoute = async () =>
  new Response(`${buildId}\n`, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
