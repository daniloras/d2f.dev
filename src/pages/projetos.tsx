import Head from 'next/head'

import { Projetos } from '@/modules/projetos/projetos'

export default function projetos() {
  return (
    <>
      <Head>
        <title>D2F | Projetos de Inovação Digital em Web e Mobile</title>
        <meta name="description" content="Explore os projetos da D2F e descubra como transformamos ideias em soluções digitais inovadoras. Veja exemplos de nosso trabalho em web e mobile, entregando resultados que superam as expectativas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Projetos />
    </>
  )
}
