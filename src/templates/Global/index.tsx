import { LayoutBanner } from 'components/Layout/Banner'
import { LayoutFooter } from 'components/Layout/Footer'
import { LayoutIntro } from 'components/Layout/Intro'
import { LayoutHeader } from 'components/Layout/Header'
import React, { ReactNode } from 'react'

type Props = {
  showDefaultPage?: boolean
  showAlbumPage?: boolean
  title: string
  description: string
  image?: string
  children?: ReactNode
}

const TemplateGlobal: React.FC<Props> = ({
  showDefaultPage = true,
  showAlbumPage = false,
  title,
  description,
  children
}) => {
  return (
    <>
      <LayoutHeader showDefaultPage={showDefaultPage} />

      {showDefaultPage === true && <LayoutBanner />}
      {!showAlbumPage && (
        <>
          {children}
          <LayoutIntro title={title} description={description} />
        </>
      )}

      <p
        style={{
          textAlign: 'center',
          color: 'grey',
          padding: '60px 20px 0px 20px'
        }}
      >
        <strong>Onde Estamos: </strong> Av. Paulista, 1636 - sala 1504 -
        Cerqueira César
        <br />
        São Paulo - SP, 01310-200
        <p style={{ marginTop: 20 }}>
          E-mail{' '}
          <a href="contato@d2f.dev" target="_blank">
            contato@d2f.dev
          </a>{' '}
          ou se preferir pelo whatsapp{' '}
          <a
            href="https://api.whatsapp.com/send/?phone=11911300127&text=Ol%C3%A1+D2F%2C+Gostaria+de+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            (11) 9-1130-0127
          </a>
        </p>
      </p>

      <LayoutFooter />
    </>
  )
}

export { TemplateGlobal }
