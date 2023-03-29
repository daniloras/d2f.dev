import '@fortawesome/fontawesome-svg-core/styles.css'
import 'styles/global.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import { SessionProvider } from 'next-auth/react'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `
          }}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#aa772c" />
        <meta
          name="msapplication-TileImage"
          content="/images/favicon/favicon-32x32.png"
        />
        <meta name="theme-color" content="#aa772c"></meta>
        <meta
          name="google-site-verification"
          content="u4AeVIEJb-K37dgD1xvXRaQOFAtDUkgkTReCcu9jAik"
        />
        <meta name="msvalidate.01" content="EC9DC7AA2D1324D5432E4B6657C6F233" />
        <link rel="icon" href="/images/favicon/favicon.ico" />
      </Head>
      <SessionProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default App
