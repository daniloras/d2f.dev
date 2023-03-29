import React from 'react'
import Image from 'next/image'

import * as S from './styles'

const LayoutBanner = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Column>
          <h1>
            Somos <span>software house</span>
          </h1>
          <h2>
            Nosso objetivo é fazer uma jornada e te ajudar a encontrar soluções
            criativas e inovadoras para o seu negócio. Sempre focamos em
            qualidade, transparência e comunicação para garantir a sua
            satisfação. Simples assim, sua visão em realidade juntos!
          </h2>
        </S.Column>
        <S.Column className="hide-on-mobile">
          <Image
            src={'/images/banner-default.png'}
            width={693}
            height={440}
            layout="responsive"
            quality={75}
            priority={true}
            alt={'D2F Software House'}
          />
        </S.Column>
      </S.Container>
    </S.Wrapper>
  )
}

export { LayoutBanner }
