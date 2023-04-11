import React from 'react'
import Image from 'next/image'

import * as S from './styles'

type Props = {
  title: string
  description: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LayoutIntro = ({ title, description }: Props) => {
  return (
    <S.Wrapper className="wrapper">
      <S.Container>
        <S.Column>
          <h3>
            <span>Nosso</span> {title}
          </h3>
          <h4>{description}</h4>
        </S.Column>
      </S.Container>
      <S.Customer>
        <Image
          src={'/images/customer_07.png'}
          layout="fixed"
          className="image"
          height={30}
          width={120}
          quality={70}
          alt={'D2F Software House'}
        />
        <Image
          src={'/images/customer_02.png'}
          layout="fixed"
          className="image"
          height={60}
          width={120}
          quality={70}
          alt={'D2F Software House'}
        />
        <Image
          src={'/images/customer_01.png'}
          layout="fixed"
          className="image"
          height={80}
          width={140}
          quality={70}
          alt={'D2F Software House'}
        />
        <Image
          src={'/images/customer_06.png'}
          layout="fixed"
          className="image"
          height={60}
          width={150}
          quality={70}
          alt={'D2F Software House'}
        />
      </S.Customer>
    </S.Wrapper>
  )
}

export { LayoutIntro }
