import type { MetadataRoute } from 'next'
import { servicesData } from '@/modules/servicos/servicos.data'

export default function sitemap(): MetadataRoute.Sitemap {
  const formattedDate = '2024-09-03T22:14:04.678Z'
  const site = 'https://d2f.dev'

  const services = servicesData.map((service) => ({
    url: `${site}/servicos/${service.slug}`,
    lastModified: formattedDate,
    changeFrequency: 'monthly' as const,
    priority: 1.0,
  }))

  return [
    {
      url: site,
      lastModified: formattedDate,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${site}/empresa`,
      lastModified: formattedDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${site}/projetos`,
      lastModified: formattedDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${site}/contato`,
      lastModified: formattedDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    ...services
  ]
}
