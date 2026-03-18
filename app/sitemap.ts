import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://moksha360.com'
  
  // Base Routes
  const baseRoutes = [
    { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 1, },
  ];

  // Service Core Routes
  const serviceRoutes = [
    '/artist-management', '/music-promotion', '/live-events', '/mentorship', '/xr-ai', '/artists'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Hyper-Targeted Local SEO Pages
  const localRoutes = [
    '/top-entertainment-agency-bangalore', '/artist-management-bangalore', '/music-promotion-bangalore', '/event-management-bangalore', '/music-training-bangalore', '/xr-music-experiences-bangalore', '/entertainment-agency-indiranagar', '/entertainment-agency-koramangala', '/entertainment-agency-whitefield', '/top-artist-manager-bengaluru'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // The 15 High-Authority SEO Blogs
  const blogRoutes = [
    '/blog/how-to-become-a-music-artist-in-bangalore', '/blog/best-music-promotion-strategies-in-india', '/blog/how-artist-management-works', '/blog/top-music-events-in-bangalore-2026', '/blog/how-to-get-your-first-gig', '/blog/ai-in-music-industry-explained', '/blog/xr-concerts-future-of-music', '/blog/how-to-build-a-music-brand', '/blog/indie-artist-growth-guide', '/blog/music-marketing-checklist', '/blog/how-to-get-spotify-streams', '/blog/best-recording-studios-in-bangalore', '/blog/music-career-mistakes-to-avoid', '/blog/how-to-get-signed-to-a-label', '/blog/event-management-guide-live-music'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...baseRoutes, ...serviceRoutes, ...localRoutes, ...blogRoutes];
}
