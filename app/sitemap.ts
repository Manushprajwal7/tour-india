import { MetadataRoute } from 'next'
import { getAllPackages } from '@/lib/packages-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tourindia24.com'
  const packages = getAllPackages()

  // Generate dynamic tour routes
  const tourUrls = packages.map((pkg) => ({
    url: `${baseUrl}/tour/${pkg.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
  ]

  return [...staticUrls, ...tourUrls]
}
