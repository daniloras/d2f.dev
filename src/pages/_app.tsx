import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

import '../styles/globals.css'

const fontDefault = Nunito({ weight: ['200', '400', '700', '900'], subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root" className={fontDefault.className}>
      <Component {...pageProps} />
    </div>
  )
}
