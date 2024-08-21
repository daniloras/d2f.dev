import Head from 'next/head'

import { Empresa } from '@/modules/empresa/empresa'

export default function empresa() {
  return (
    <>
      <Head>
        <title>Conheça a D2F: Experiência e Inovação em Soluções Digitais</title>
        <meta name="description" content="Desde 2010, a D2F com soluções criativas e inovadoras, transformando clientes em parceiros de sucesso. Com uma equipe experiente, entregamos resultados excepcionais em projetos web e mobile, sempre superando expectativas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Empresa />
    </>
  )
}
