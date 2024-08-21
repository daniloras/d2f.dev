import Head from 'next/head'

import { Home } from '@/modules/home/home'

export default function home() {
  return (
    <>
      <Head>
        <title>D2F Software House</title>
        <meta name="description" content="Somos uma software house que vai além da entrega, desenvolvimento sob demanda. Teve uma idéia?! Vamos tomar um café e surpreenda-se!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}
