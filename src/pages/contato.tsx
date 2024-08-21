import Head from 'next/head'

import { Contato } from '@/modules/contato/contato'

export default function contato() {
  return (
    <>
      <Head>
        <title>Entre em Contato com a D2F: Vamos Criar Soluções Juntos</title>
        <meta name="description" content="Estamos a um clique de transformar suas ideias em realidade. Entre em contato e vamos inovar juntos." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contato />
    </>
  )
}
