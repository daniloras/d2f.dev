import React from 'react'

import { Props } from './interface'
import * as S from './styles'

const DivisorText: React.FC<Props> = ({ label }) => {
  return (
    <S.Wrapper>
      <S.LineDivisorDark>
        <span>{label}</span>
      </S.LineDivisorDark>
    </S.Wrapper>
  )
}

export default DivisorText
