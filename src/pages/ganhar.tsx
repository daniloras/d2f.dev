import Head from 'next/head'

import { Ganhar } from '@/modules/ganhar/ganhar'

const description = 'Grave vídeos em primeira pessoa fazendo tarefas de casa, sem mostrar o rosto, e receba de R$ 25 a 30 por hora. Cadastre-se na Hub, na Mimix ou nas duas.'

export default function GanharPage() {
  return (
    <>
      <Head>
        <title>Grave por Hora</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://d2f.dev/ganhar" />
        <meta property="og:title" content="Grave suas tarefas. Receba por hora." />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Ganhar />
    </>
  )
}
