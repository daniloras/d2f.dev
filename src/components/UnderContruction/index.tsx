import Text from 'components/Text'
import Image from 'next/image'
import React from 'react'

import * as S from './styles'

const UnderConstruction: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <Image
          src={'/images/logo-dark.png'}
          layout="fixed"
          height={60}
          width={220}
          alt={'KICOPA.online'}
        />
        <Text
          label="Solução para gerenciar suas figurinhas da copa online!"
          size="large"
          color="white"
          weight={700}
        />
        <Text
          label="Em breve aguarde os próximos dias, para poder listar todas suas figurinhas e as faltantes, e muito mais, de forma simples e fácil"
          size="regular"
          color="white"
        />
        <Text
          label="© kicopa.online todos os direitos reservados - kicopa.online@gmail.com"
          size="regular"
          color="grey"
        />
      </S.Content>
    </S.Wrapper>
  )
}

export default UnderConstruction
