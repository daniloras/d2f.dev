import Head from 'next/head'
import React from 'react'
import { SeoMetaTypeProps } from './interface'

const SeoMeta: React.FC<SeoMetaTypeProps> = ({
  title,
  description
}: SeoMetaTypeProps) => {
  return (
    <Head>
      <meta name="language" content="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index" />
      <meta name="author" content="Kicopa.online" />
      <meta name="keywords" content="Kicopa.online" />

      <meta property="og:type" content="page" />
      <meta property="og:url" content="https://kicopa.online" />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content="https://kicopa.online/images/logo-light.png"
      />
      <meta property="og:description" content={description} />

      <meta property="article:author" content="Kicopa.online" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@" />
      <meta name="twitter:title" content={description} />
      <meta name="twitter:creator" content="@" />
      <meta name="twitter:description" content={description} />
    </Head>
  )
}

export { SeoMeta }
