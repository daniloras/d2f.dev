import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const formattedDate = '2024-08-21T14:14:05.678Z'
  const site = 'https://d2f.dev'

  return [
    {
      url: site,
      lastModified: formattedDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${site}/empresa`,
      lastModified: formattedDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${site}/projetos`,
      lastModified: formattedDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${site}/contato`,
      lastModified: formattedDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]
}
