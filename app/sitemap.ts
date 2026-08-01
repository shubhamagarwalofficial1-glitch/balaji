import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/products',
    '/services',
    '/industries',
    '/quote',
    '/contact',
    '/privacy',
    '/terms',
  ]
  const lastModified = new Date()
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/quote' || route === '/contact' ? 0.8 : 0.6,
  }))
}
