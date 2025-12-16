import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Statically prerender the main, non-parameterized pages
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'about', renderMode: RenderMode.Prerender },
  { path: 'services', renderMode: RenderMode.Prerender },
  { path: 'solutions', renderMode: RenderMode.Prerender },
  { path: 'products', renderMode: RenderMode.Prerender },
  { path: 'industries', renderMode: RenderMode.Prerender },
  { path: 'contact', renderMode: RenderMode.Prerender },

  // Dynamic routes with parameters should not be prerendered
  { path: 'services/:slug', renderMode: RenderMode.Server },
  { path: 'industries/:slug', renderMode: RenderMode.Server },
  { path: 'solutions/:slug', renderMode: RenderMode.Server },

  // Fallback for any other routes
  { path: '**', renderMode: RenderMode.Server }
];
