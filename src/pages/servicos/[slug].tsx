import Head from 'next/head'
import { useRouter } from 'next/router'

import { Servicos } from '@/modules/servicos/servicos'
import { servicesData } from '@/modules/servicos/servicos.data'
import { useEffect } from 'react'

export default function ServicosPage() {
  const router = useRouter()
  const slug = router.query.slug

  const service = servicesData.find((i) => i.slug === slug)

  useEffect(() => {
    if (!service && slug) {
      router.push('/404')
    }
  }, [service, slug, router])

  if (!service) {
    return null
  }

  return (
    <>
      <Head>
        <title>{service.title}</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Servicos {...service}/>
    </>
  )
}
