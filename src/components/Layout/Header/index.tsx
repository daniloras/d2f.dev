import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import * as S from './styles'

import BtnWhats from 'components/BtnWhats'

type Props = {
  showDefaultPage?: boolean
}

const LayoutHeader: React.FC<Props> = ({ showDefaultPage = true }) => {
  const router = useRouter()
  return (
    <S.Wrapper>
      <S.Container>
        <S.Column>
          <Link href="/">
            <a>
              <Image
                src={'/images/logo_dark.png'}
                layout="fixed"
                className="visible-on-mobile"
                height={50}
                width={170}
                alt={'D2F Software House'}
              />
            </a>
          </Link>
          {!showDefaultPage && (
            <S.IconBack
              className="hide-on-mobile"
              onClick={() => router.back()}
            >
              <a>
                <Image
                  src={'/images/icon_go_back.png'}
                  layout="fixed"
                  height={12}
                  width={49}
                  alt={'D2F Software House'}
                />
              </a>
            </S.IconBack>
          )}
        </S.Column>
        <S.Column style={{ paddingLeft: 20, paddingRight: 20 }}>
          <BtnWhats />
        </S.Column>
      </S.Container>
    </S.Wrapper>
  )
}

export { LayoutHeader }
