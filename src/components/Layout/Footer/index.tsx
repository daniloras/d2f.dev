import React from 'react'
import Image from 'next/image'

import * as S from './styles'

const LayoutFooter: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Image
          src={'/images/icon-dark.png'}
          layout="fixed"
          height={10}
          width={53}
          alt={'D2F Software House'}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }
        />
      </S.Container>
    </S.Wrapper>
  )
}

export { LayoutFooter }
