import React, { ReactNode } from 'react'

import * as S from './styles'

type Props = {
  children?: ReactNode
}

const LayoutContent = ({ children }: Props) => {
  return (
    <S.Wrapper className="wrapper">
      <S.Container>
        <S.Column>{children}</S.Column>
      </S.Container>
    </S.Wrapper>
  )
}

export { LayoutContent }
