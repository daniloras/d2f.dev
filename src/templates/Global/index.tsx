import { LayoutBanner } from 'components/Layout/Banner'
import { LayoutContent } from 'components/Layout/Banner/Content'
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
      {/* {showAlbumPage && <ActionsAlbum />} */}
      {!showAlbumPage && (
        <LayoutIntro title={title} description={description} />
      )}
      {/*
      <LayoutContent>{children}</LayoutContent> */}
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
      </p>
      <LayoutFooter />
    </>
  )
}

export { TemplateGlobal }
